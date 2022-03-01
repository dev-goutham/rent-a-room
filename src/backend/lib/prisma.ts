import { Prisma, PrismaClient } from "@prisma/client"

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >
}

let prisma: PrismaClient<
  Prisma.PrismaClientOptions,
  never,
  Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
>

if (!global.prisma as unknown as typeof prisma) {
  prisma = new PrismaClient()
} else {
  prisma = global.prisma
}

export default prisma
