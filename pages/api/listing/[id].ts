import nextConnect from "@backend/lib/nextConnect"
import prisma from "@backend/lib/prisma"
import { ApiHandler } from "@backend/typings"

const getListing: ApiHandler = async (req, res) => {
  const { id } = req.query as { id: string }

  const listing = await prisma.listing.findUnique({
    where: {
      id,
    },
  })

  res.json({ listing })
}

const handler = nextConnect().get(getListing)

export default handler
