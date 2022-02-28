import bcrypt from "bcrypt"
import { Unauthorized } from "http-errors"
import prisma from "../lib/prisma"

const login = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })
  if (!user || !user.password) {
    throw new Unauthorized()
  }

  const verified = await bcrypt.compare(password, user.password)
  if (!verified) {
    throw new Unauthorized()
  }
  return user
}

export default login
