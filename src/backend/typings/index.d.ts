import { NextApiRequest, NextApiResponse } from "next"
import { RequestHandler } from "next-connect"

type PassportLogin = (user, fn: (error: Error) => void) => void

export type ApiRequest = NextApiRequest & {
  user?: {
    email: string
    id: string
  }
  login: PassportLogin
  logout: () => void
}

export type ApiHandler = RequestHandler<ApiRequest, NextApiResponse>
