import { Strategy } from "passport-local"
import login from "@backend/utils/login"

const localStrategy = new Strategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async (email: string, password: string, done) => {
    try {
      const user = await login(email, password)

      if (!user) {
        return done(null, false)
      } else {
        return done(null, {
          email: user.email,
          id: user.id,
        })
      }
    } catch (error) {
      done(error)
    }
  },
)

export default localStrategy
