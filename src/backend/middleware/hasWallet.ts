import { Middleware } from "next-connect"
import { NextApiResponse } from "next"
import { ApiRequest } from "@backend/typings"
import { Unauthorized } from "http-errors"
import prisma from "@backend/lib/prisma"

const hasWallet: Middleware<ApiRequest, NextApiResponse> = async (
  req,
  _res,
  next,
) => {
  if (!req.user) {
    throw new Unauthorized()
  }
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
  })

  if (!user) {
    throw new Unauthorized()
  }

  if (!user.walletId) {
    throw new Unauthorized(`Invalid wallet id`)
  }
  next()
}

export default hasWallet
