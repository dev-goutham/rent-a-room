import joi from "joi"
import gravatar from "gravatar"
import bcrypt from "bcrypt"
import { BadRequest } from "http-errors"

import nextConnect from "@backend/lib/nextConnect"
import { ApiHandler } from "@backend/typings"
import schemaValidate from "@backend/middleware/schemaValidate"
import prisma from "@backend/lib/prisma"

const registerSchema = joi.object<{
  username: string
  password: string
  email: string
}>({
  username: joi.string().required().min(6).max(12),
  email: joi.string().email().required(),
  password: joi
    .string()
    .pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/),
})

const register: ApiHandler = async (req, res) => {
  const { username, email, password } = req.body as {
    username: string
    email: string
    password: string
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  const image = gravatar.url(email, { protocol: "https" })

  const existingUser = await prisma.user.findUnique({ where: { email } })
  if (existingUser) {
    throw new BadRequest()
  }

  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name: username,
      image,
      income: 0,
    },
  })
  res.redirect("/api/auth/login")
}

const handler = nextConnect()
  .use(schemaValidate(registerSchema, "invalid username, email or password"))
  .post(register)

export default handler
