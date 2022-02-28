import nextConnect from "@backend/lib/nextConnect"
import { ApiHandler } from "@backend/typings"

const getMe: ApiHandler = async (req, res) => {
  const user = req.user
  res.json({
    user,
  })
}

export default nextConnect().get(getMe)
