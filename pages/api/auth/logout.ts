import nextConnect from "@backend/lib/nextConnect"
import { ApiHandler } from "@backend/typings"

const logout: ApiHandler = (req, res) => {
  req.logout()
  res.json({ message: "successfully logged out" })
}

export default nextConnect().post(logout)
