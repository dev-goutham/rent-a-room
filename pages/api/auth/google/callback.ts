import nextConnect from "@backend/lib/nextConnect"
import passport from "passport"

const handler = nextConnect().get(
  passport.authenticate("google", { scope: ["profile", "email"] }),
  (_req, res) => {
    res.writeHead(302, {
      Location: "/",
    })
    res.end()
  },
)

export default handler
