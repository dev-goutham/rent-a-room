import session from "express-session"
import nc from "next-connect"
import passport from "passport"
import MongoStore from "connect-mongo"
import "./passport"
import errorHandlerMiddleware from "../middleware/errorHandlerMiddleware"
import cookieParser from "cookie-parser"

const sessionStorage = new MongoStore({
  mongoUrl: process.env.DATABASE_URL,
  collectionName: "sessions",
})

const nextConnect = () =>
  nc({ onError: errorHandlerMiddleware })
    .use(cookieParser())
    .use(
      session({
        secret: "some secret",
        resave: true,
        saveUninitialized: true,
        store: sessionStorage,
        cookie: {
          maxAge: 1000 * 60 * 60 * 24,
          httpOnly: true,
          sameSite: "lax",
        },
      }),
    )
    .use(passport.session())
    .use(passport.initialize())

export default nextConnect
