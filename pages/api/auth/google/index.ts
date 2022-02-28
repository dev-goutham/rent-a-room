import nextConnect from "@backend/lib/nextConnect"
import passport from "passport"

const handler = nextConnect().get(
  passport.authenticate("google", { scope: ["profile", "email"] }),
)

export default handler
