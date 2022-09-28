import nextConnect from "@backend/lib/nextConnect"
import hasWallet from "@backend/middleware/hasWallet"
import isAuthenticated from "@backend/middleware/isAuthenticated"
import schemaValidate from "@backend/middleware/schemaValidate"
import { ApiHandler } from "@backend/typings"
import prisma from "@backend/lib/prisma"
import * as joi from "joi"

type Schema = {
  listingId: string
  checkInDate: string
  checkOutDate: string
}

const schema = joi.object<Schema>({
  listingId: joi.string().required(),
  checkInDate: joi.string().required(),
  checkOutDate: joi.string().required(),
})

const createBooking: ApiHandler = async (req, res) => {
  const { listingId, checkInDate, checkOutDate } = req.body
  const { id } = req.user!
  const result = await prisma.booking.create({
    data: {
      from: checkInDate,
      to: checkOutDate,
      listingId,
      userId: id,
    },
  })
  res.json(result)
}

export default nextConnect()
  .use(isAuthenticated, hasWallet, schemaValidate(schema))
  .post(createBooking)
