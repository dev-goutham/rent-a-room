import { Strategy } from "passport-google-oauth20"
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
    const user = await prisma.user.upsert({
      where: {
        email,
      },
      create: {
        email,
        image: picture,
        name,
        googleId: id,
      },
      update: {},
    })
    console.log(
      "/backend/lib/passport-google/googleStrategy. Upserted the user",
      { user },
    )
    done(null, user)
  },
)

export default googleStrategy
