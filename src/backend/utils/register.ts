import bcrypt from "bcrypt"
import gravatar from "gravatar"
import prisma from "@backend/lib/prisma"

const register = async ({
  email,
  password,
  username,
}: {
  email: string
  username: string
  password: string
}) => {
  const hashedPassword = await bcrypt.hash(password, 10)
  const image = gravatar.url(email, { protocol: "https" })
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name: username,
      image,
    },
  })
  return user
}

export default register
