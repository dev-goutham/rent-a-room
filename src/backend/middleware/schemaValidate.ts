import { NextApiRequest, NextApiResponse } from "next"
import { Middleware } from "next-connect"
import { ObjectSchema } from "joi"
import { BadRequest } from "http-errors"

const schemaValidate =
  <T>(
    schema: ObjectSchema<T>,
    message?: string,
  ): Middleware<NextApiRequest, NextApiResponse> =>
  async (req, _res, next) => {
    const { error } = schema.validate({ ...req.body }, { allowUnknown: true })
    if (error) {
      throw new BadRequest(message || "Invalid request")
    }
    next()
  }

export default schemaValidate
