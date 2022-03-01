import { Unauthorized } from "http-errors"

import nextConnect from "@backend/lib/nextConnect"
import prisma from "@backend/lib/prisma"
import { ApiHandler } from "@backend/typings"

const addListing: ApiHandler = async (req, res) => {
  const user = req.user
  if (!user) {
    throw new Unauthorized()
  }
}

const getListings: ApiHandler = async (_req, res) => {
  const listings = await prisma.listing.findMany()
  res.json({ listings })
}

const handler = nextConnect().get(getListings).post(addListing)

export default handler
