import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { Listing, PrismaClient, User } from "@prisma/client"

import ListingCardsGrid from "@frontend/components/ListingCardsGrid"

interface Props {
  user: User
  listings: Listing[]
  bookings: Listing[]
}

const User: NextPage<Props> = ({
  user: { image, name, email },
  listings,
  bookings,
}) => {
  return (
    <div className="mx-auto max-w-[1328px] pt-12">
      <div className="flex justify-center">
        <div className="px-4 border-[1px] border-slate-300 mb-12 w-[390px]">
          <div className="divide-y-[1px] divide-slate-300">
            <div className="flex justify-center py-8">
              <img
                src={image}
                alt={name}
                className="inline-block object-cover w-24 h-24 rounded-full "
              />
            </div>
            <div className="py-4 space-y-2">
              <h4 className="text-xl font-semibold text-blue-800">Details</h4>
              <p>
                Name:
                <span className="ml-2 font-semibold">{name}</span>
              </p>
              <p>
                Contact:
                <span className="ml-2 font-semibold">{email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {listings.length > 0 && (
        <div>
          <h2 className="mb-4 text-xl font-semibold text-blue-800">Listings</h2>
          <ListingCardsGrid listings={listings} />
        </div>
      )}
      {bookings.length > 0 && (
        <div>
          <h2 className="mb-4 text-xl font-semibold text-blue-800">Listings</h2>
          <ListingCardsGrid listings={listings} />
        </div>
      )}
    </div>
  )
}

export default User

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const { id } = params as { id: string }

  const prisma = new PrismaClient()
  const user = await prisma.user.findUnique({
    where: { id },
  })

  if (!user) {
    return {
      props: {},
      notFound: true,
    }
  }

  const listings = await prisma.listing.findMany({
    where: {
      userId: id,
    },
  })

  const bookings = await prisma.listing.findMany({
    where: {
      Booking: {
        some: {
          userId: id,
        },
      },
    },
  })

  return {
    props: {
      user,
      listings,
      bookings,
    },
    revalidate: 1,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prisma = new PrismaClient()
  const users = await prisma.user.findMany()

  const paths = users.map((user) => ({
    params: {
      id: user.id,
    },
  }))

  return {
    fallback: "blocking",
    paths,
  }
}
