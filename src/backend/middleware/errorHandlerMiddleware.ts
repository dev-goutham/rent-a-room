import { HttpError } from "http-errors"
import { NextApiRequest, NextApiResponse } from "next"
import { ErrorHandler } from "next-connect"

const errorHandlerMiddlware: ErrorHandler<NextApiRequest, NextApiResponse> = (
  err,
  _req,
  res,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next,
) => {
  let statusCode: number
  let messages: string[]
  console.log("error handler middleware")
  console.log({ err })

  if (err instanceof HttpError) {
    statusCode = err.statusCode
    messages = [err.message]
  } else {
    statusCode = 500
    messages = [err.message] || ["Something went wrong"]
  }
  res.status(statusCode).json({
    error: messages,
    data: null,
  })
}

export default errorHandlerMiddlware
