import nextConnect from "@backend/lib/nextConnect"
import { ObjectId } from "mongodb"
import prisma from "@backend/lib/prisma"
import { ApiHandler } from "@backend/typings"

const getListingByUser: ApiHandler = async (req, res) => {
  const { id } = req.query as { id: string }
  const listings = await prisma.listing.findMany({
    where: {
      userId: new ObjectId(id) as unknown as string,
    },
  })
  res.json({ listings })
}

const handler = nextConnect().get(getListingByUser)

export default handler
