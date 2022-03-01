import ListingCardsGrid from "@frontend/components/ListingCardsGrid"
import Pagination from "@frontend/components/Pagination"
import Section from "@frontend/ui/Section"
import Sort from "@frontend/ui/Sort"
import { Listing } from "@prisma/client"
import { GetServerSideProps, NextPage } from "next"
import prisma from "@backend/lib/prisma"

interface Props {
  listings: Listing[]
}
const Listings: NextPage<Props> = ({ listings }) => {
  return (
    <Section>
      <div className="flex items-baseline mx-auto justify-between md:w-[656px] lg:w-[1328px] mb-6 ">
        <Sort onSortChange={() => console.log("")} />
        <Pagination
          currentPage={1}
          numberOfPages={1}
          onPageChange={() => {
            console.log("")
          }}
        />
      </div>
      <div>
        <ListingCardsGrid listings={listings} />
      </div>
    </Section>
  )
}

export default Listings

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  // const { city } = params as { city: string }

  // const listings = await prisma.listing.findMany({
  //   where: {
  //     city,
  //   },
  // })
  // console.log(listings.length)
  let listings: Listing[] = []
  const { city, country } = ctx.query as {
    city?: string
    country?: string
  }

  if (!city && !country) {
    listings = await prisma.listing.findMany()
  } else if (city) {
    listings = await prisma.listing.findMany({
      where: {
        city,
      },
    })
  } else if (country) {
    listings = await prisma.listing.findMany({
      where: {
        country,
      },
    })
  }

  return {
    props: {
      listings,
    },
  }
}
