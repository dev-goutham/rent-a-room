import nextConnect from "@backend/lib/nextConnect"
import { ApiHandler } from "@backend/typings"
import prisma from "@backend/lib/prisma"

const getMe: ApiHandler = async (req, res) => {
  if (!req.user) {
    res.json({
      user: null,
    })
    return
  }
  const user = await prisma.user.findUnique({
    where: {
      id: req.user?.id,
    },
  })

  res.json({
    user,
  })
}

export default nextConnect().get(getMe)
