import nextConnect from "@backend/lib/nextConnect"
import prisma from "@backend/lib/prisma"
import { ApiHandler } from "@backend/typings"

const getListings: ApiHandler = async (_req, res) => {
  const listings = await prisma.listing.findMany()
  res.json({ listings })
}

const handler = nextConnect().get(getListings)

export default handler
