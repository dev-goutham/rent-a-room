import React from "react"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import ListingBookCta from "@frontend/sections/BookListing"
import ListingDetails from "@frontend/sections/ListingDetails"
import { PrismaClient, Listing, User } from "@prisma/client"

interface Props {
  listing: Listing
  host: User
}

const Listing: NextPage<Props> = ({ listing, host }) => {
  return (
    <div className="pt-12 max-w-[1280px] mx-auto">
      <div className="justify-between lg:flex">
        <ListingDetails listing={listing} host={host} />
        <ListingBookCta price={listing.price} />
      </div>
    </div>
  )
}

export default Listing

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const { id } = params as { id: string }
  const prisma = new PrismaClient()
  const listing = await prisma.listing.findUnique({
    where: { id },
  })
  if (!listing) {
    return {
      notFound: true,
    }
  }

  const user = await prisma.user.findUnique({
    where: {
      id: listing.userId!,
    },
  })
  if (!user) {
    return {
      notFound: true,
    }
  }

  return {
    props: { listing, host: user },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prisma = new PrismaClient()
  const listings = await prisma.listing.findMany()
  const paths = listings.map((l) => ({
    params: {
      id: l.id,
    },
  }))
  return {
    paths,
    fallback: "blocking",
  }
}
