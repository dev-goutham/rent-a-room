import passport from "passport"
import prisma from "../prisma"
import googleStrategy from "./passport-google"
import localStrategy from "./passport-local"

passport.use(googleStrategy)
passport.use(localStrategy)

passport.serializeUser((user, done) => {
  console.log("seriealize user")
  console.log({ user })
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  done(null, user.id)
})

passport.deserializeUser(async (userId: string, done) => {
  const user = await prisma.user.findUnique({ where: { id: userId } })

  if (!user) {
    return done(null, false)
  }

  done(null, {
    email: user.email,
    name: user.name,
    id: user.id,
  })
})
