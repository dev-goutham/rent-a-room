import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { Listing, PrismaClient, User } from "@prisma/client"

import ListingCardsGrid from "@frontend/components/ListingCardsGrid"
import Button from "@frontend/ui/Button"
import { useEffect, useState } from "react"
import useAuth from "@frontend/store/auth"

interface Props {
  user: User
  listings: Listing[]
  bookings: Listing[]
}

const StripeSection: React.FC<{ walletId: string | null; income: number }> = ({
  walletId,
  income,
}) => {
  return (
    <div className="py-2 space-y-4">
      {walletId === null ? (
        <>
          <h4 className="text-xl font-semibold text-blue-800">
            Want to become a host and earn money?
          </h4>
          <Button
            onClick={() => {
              window.open(
                `https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_STRIPE_CLIENT_ID}&scope=read_write`,
              )
            }}
            variant="fill"
          >
            Connect With Stripe
          </Button>
        </>
      ) : (
        <>
          <p className="text-xl font-semibold">
            <span className="inline-block">Income earned: </span>
            <span className="inline-block ml-2 text-blue-800">${income}</span>
          </p>
        </>
      )}
    </div>
  )
}

const User: NextPage<Props> = ({
  user: { image, name, email, id, walletId, income },
  listings,
  bookings,
}) => {
  const [ownsProfile, setOwnsProfile] = useState(false)
  const { user } = useAuth()

  useEffect(() => {
    if (!user) {
      return
    }
    setOwnsProfile(() => id === user.id)
  }, [user, id])

  return (
    <div className="mx-auto max-w-[1328px] pt-12">
      <div className="flex justify-center">
        <div className="px-4 py-4 border-[1px] border-slate-200 mb-12 w-[390px]">
          <div className="divide-y-[1px] divide-slate-200">
            <div className="flex justify-center py-4">
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
            {ownsProfile && (
              <>
                <hr className="w-[1px]" />
                <StripeSection walletId={walletId} income={income} />
              </>
            )}
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

export const getStaticProps: GetStaticProps<Props> = async (req) => {
  const { id } = req.params as { id: string }

  const prisma = new PrismaClient()
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        listings: true,
        Booking: true,
      },
    })
    if (!user) {
      return {
        props: {},
        notFound: true,
      }
    }

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
        listings: user.listings,
        bookings,
      },
      revalidate: 1,
    }
  } catch (error) {
    return {
      props: {},
      notFound: true,
    }
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
