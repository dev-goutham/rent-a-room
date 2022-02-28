import passport from "passport"
import prisma from "../prisma"
import googleStrategy from "./passport-google"
import localStrategy from "./passport-local"

passport.use(googleStrategy)
passport.use(localStrategy)

passport.serializeUser((user, done) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  done(null, user.id)
})

passport.deserializeUser(async (userId: string, done) => {
  const user = await prisma.user.findUnique({ where: { id: userId } })

  done(null, user)
})
