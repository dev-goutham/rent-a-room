import nextConnect from "@backend/lib/nextConnect"
import { NotFound } from "http-errors"
import prisma from "@backend/lib/prisma"
import { ApiHandler } from "@backend/typings"

const getUser: ApiHandler = async (req, res) => {
  const { id } = req.query as { id: string }
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      listings: true,
      Booking: true,
    },
  })
  if (!user) {
    throw new NotFound()
  }
  const result = JSON.parse(JSON.stringify(user))
  delete result.password
  res.json({ user: result })
}

const handler = nextConnect().get(getUser)

export default handler
