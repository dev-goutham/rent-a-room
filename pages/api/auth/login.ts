import joi from "joi"

import { ApiHandler } from "@backend/typings"
import schemaValidate from "@backend/middleware/schemaValidate"
import passport from "passport"
import nextConnect from "@backend/lib/nextConnect"

const loginSchema = joi.object<{ email: string; password: string }>({
  email: joi.string().required(),
  password: joi.string().required(),
})

const loginHandler: ApiHandler = async (req, res, next) => {
  await passport.authenticate("local", (error, user) => {
    if (error) {
      next(error)
    }
    req.login(user, (err) => {
      if (err) {
        next(error)
      }
      res.json({
        message: "successfully logged in",
        user: req.user,
      })
    })
  })(req, res)
}

const handler = nextConnect()
  .use(schemaValidate(loginSchema))
  .post(loginHandler)

export default handler
