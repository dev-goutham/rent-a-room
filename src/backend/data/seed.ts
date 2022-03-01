import users from "./users"
import prisma from "../lib/prisma"
import listings from "./listings"

const seedUsers = async () => {
  console.log("seeding users")
  await prisma.user.createMany({ data: users })
  console.log("seeding users complete")
}

const seedListings = async () => {
  console.log("seeding listings")
  await prisma.listing.createMany({ data: listings })
  console.log("done seeding listings")
}

const seed = async () => {
  await seedUsers()
  await seedListings()
}

seed()
