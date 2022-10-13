import nextConnect from "@backend/lib/nextConnect"
import isAuthenticated from "@backend/middleware/isAuthenticated"
import schemaValidate from "@backend/middleware/schemaValidate"
import { ApiHandler } from "@backend/typings"
import prisma from "@backend/lib/prisma"
import * as joi from "joi"
import { client } from "@backend/lib/stripe"
import { InternalServerError, BadRequest } from "http-errors"

export const stripeCharge = async (
  amount: number,
  token: string,
  stripeAccount: string,
) => {
  const res = await client.charges.create(
    {
      amount,
      currency: "usd",
      source: token,
      application_fee_amount: amount * 0.05,
    },
    {
      stripeAccount,
    },
  )

  if (res.status !== "succeeded") {
    throw new InternalServerError(`Could not complete transaction`)
  }
}

type Schema = {
  listingId: string
  amount: number
  token: string
  checkInDate: string
  checkOutDate: string
}

const schema = joi.object<Schema>({
  listingId: joi.string().required(),
  amount: joi.number().required(),
  token: joi.string().required(),
  checkInDate: joi.string().required(),
  checkOutDate: joi.string().required(),
})

const createBooking: ApiHandler = async (req, res) => {
  const { listingId, checkInDate, checkOutDate, amount, token } = req.body
  const { id } = req.user!
  const listing = await prisma.listing.findUnique({
    where: {
      id: listingId,
    },
  })

  if (!listing) {
    throw new BadRequest("Cannot find the listing")
  }

  if (listing.userId === id) {
    throw new BadRequest("User cannot book their own listing")
  }

  if (new Date(checkOutDate) < new Date(checkInDate)) {
    throw new BadRequest("Checkout date cannot come before checkin date")
  }

  const host = await prisma.user.findUnique({
    where: {
      id: listing.userId!,
    },
  })

  if (!host || !host.walletId) {
    throw new InternalServerError()
  }

  await stripeCharge(amount, token, host.walletId)

  const result = await prisma.booking.create({
    data: {
      from: checkInDate,
      to: checkOutDate,
      listingId,
      userId: id,
    },
  })

  await prisma.user.update({
    where: {
      id: host.id,
    },
    data: {
      income: host.income + amount,
    },
  })

  res.json({ result })
}

export default nextConnect()
  .use(isAuthenticated, schemaValidate(schema))
  .post(createBooking)
