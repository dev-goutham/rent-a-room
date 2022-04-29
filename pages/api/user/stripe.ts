import { BadRequest, InternalServerError } from "http-errors"

import nextConnect from "@backend/lib/nextConnect"
import isAuthenticated from "@backend/middleware/isAuthenticated"
import { ApiHandler } from "@backend/typings"
import { stripeConnect } from "@backend/lib/stripe"
import prisma from "@backend/lib/prisma"

const addStripeDetails: ApiHandler = async (req, res) => {
  try {
    const { code } = req.body as {
      code?: string
    }
    console.log({ code })
    if (!code) {
      throw new BadRequest()
    }

    const { stripe_user_id } = await stripeConnect(code)
    console.log(stripe_user_id)
    const { walletId } = await prisma.user.update({
      where: {
        id: req.user!.id,
      },
      data: {
        walletId: stripe_user_id,
      },
      select: {
        walletId: true,
      },
    })
    console.log({ walletId })
    if (!walletId) {
      throw new InternalServerError(`Could not update stripe information`)
    }
    console.log("sending response")
    res.json({
      walletId,
    })
  } catch (error) {
    console.log(error)
    throw new InternalServerError()
  }
}

export default nextConnect().use(isAuthenticated).put(addStripeDetails)
