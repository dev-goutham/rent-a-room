import nextConnect from "@backend/lib/nextConnect"
import { ObjectId } from "mongodb"
import prisma from "@backend/lib/prisma"
import { ApiHandler } from "@backend/typings"

const getBookingsByUser: ApiHandler = async (req, res) => {
  const { id } = req.query as { id: string }
  const bookings = await prisma.booking.findMany({
    where: {
      userId: new ObjectId(id) as unknown as string,
    },
  })
  res.json({ bookings })
}

const handler = nextConnect().get(getBookingsByUser)

export default handler
