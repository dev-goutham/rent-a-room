import ListingCardsGrid from "@frontend/components/ListingCardsGrid"
import Pagination from "@frontend/components/Pagination"
import Section from "@frontend/ui/Section"
import Sort from "@frontend/ui/Sort"
import { Listing, Prisma } from "@prisma/client"
import { GetServerSideProps, NextPage } from "next"
import getGeoCodeData from "@backend/utils/getGeoCodeData"
import { useRouter } from "next/router"
import prisma from "@backend/lib/prisma"
import useGetListingsUrl from "@frontend/hooks/useGetListingUrl"

interface Props {
  totalCount: number
  listings: Listing[]
  formattedAddress: string
  location: string | null
}
const Listings: NextPage<Props> = ({
  listings,
  formattedAddress,
  totalCount,
}) => {
  const { query } = useRouter()
  const { setSort } = useGetListingsUrl()

  useGetListingsUrl()

  const numberOfPages = Math.ceil(totalCount / 4)

  return (
    <Section>
      <div className="md:w-[656px] py-12 lg:w-[1328px] mx-auto">
        <div className="my-4">
          <h2 className="text-2xl font-bold text-blue-700">
            Search results for &quot;{formattedAddress}&quot;
          </h2>
        </div>
        <div className="flex items-baseline justify-between mb-6 ">
          <Sort
            onSortChange={(value: string) => {
              setSort(value)
            }}
          />
          <Pagination
            currentPage={parseInt(query.page as string) || 1}
            numberOfPages={numberOfPages}
          />
        </div>

        <div>
          <ListingCardsGrid listings={listings} />
        </div>
      </div>
    </Section>
  )
}

export default Listings

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const {
    location,
    page = 1,
    sort,
  } = ctx.query as {
    location?: string
    page?: number
    sort?: string
  }

  console.log({ sort })

  const listingsQuery: Prisma.ListingFindManyArgs = {
    take: 4,
    skip: (page - 1) * 4,
  }

  const listingsCountQuery: Prisma.ListingCountArgs = {}

  if (sort) {
    listingsQuery.orderBy = {
      price: sort === "lth" ? "asc" : "desc",
    }
  }

  if (!location) {
    const [count, listings] = await prisma.$transaction([
      prisma.listing.count(),
      prisma.listing.findMany(listingsQuery),
    ])
    return {
      props: {
        totalCount: count,
        listings,
        formattedAddress: "all",
        location: null,
      },
    }
  }
  const { city, country, formattedAddress, state } = await getGeoCodeData(
    location,
  )
  if (city) {
    listingsQuery.where = { city }
    listingsCountQuery.where = { city }
  } else if (state) {
    listingsQuery.where = { state }
    listingsCountQuery.where = { state }
  } else if (country) {
    listingsQuery.where = { country }
    listingsCountQuery.where = { country }
  }

  const [count, listings] = await prisma.$transaction([
    prisma.listing.count(listingsCountQuery),
    prisma.listing.findMany(listingsQuery),
  ])

  return {
    props: {
      totalCount: count,
      listings,
      formattedAddress: formattedAddress as string,
      location,
    },
  }
}
