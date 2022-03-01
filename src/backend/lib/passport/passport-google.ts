import { Strategy } from "passport-google-oauth20"
import { BadRequest } from "http-errors"
import prisma from "../prisma"

const googleStrategy = new Strategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    callbackURL: "/api/auth/google/callback",
  },
  async function (_accessToken, _refreshToken, profile, done) {
    console.log("/backend/lib/passport-google/googleStrategy", {
      profile: JSON.parse(profile._raw),
    })
    const { id } = profile
    const { email, name, picture } = JSON.parse(profile._raw) as {
      name: string
      picture: string
      email: string
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (!existingUser) {
      const user = await prisma.user.create({
        data: {
          email,
          googleId: id,
          image: picture,
          name,
          income: 0,
        },
      })
      return done(null, {
        email: user.email,
        id: user.id,
      })
    }

    if (existingUser.googleId === null) {
      done(null, false)
      throw new BadRequest(`An account with the email ${email} already exists`)
    }

    done(null, {
      email: existingUser.email,
      id: existingUser.id,
    })
  },
)

export default googleStrategy
