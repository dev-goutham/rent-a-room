import { NextApiResponse } from "next"
import { Middleware } from "next-connect"
import { Unauthorized } from "http-errors"
import { ApiRequest } from "@backend/typings"

const isAuthenticated: Middleware<ApiRequest, NextApiResponse> = (
  req,
  _res,
  next,
) => {
  if (!req.user) {
    throw new Unauthorized()
  }
  next()
}

export default isAuthenticated
