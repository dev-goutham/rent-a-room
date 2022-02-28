import ListingCardsGrid from "@frontend/components/ListingCardsGrid"
import Pagination from "@frontend/components/Pagination"
import Section from "@frontend/ui/Section"
import Sort from "@frontend/ui/Sort"
import { Listing } from "@prisma/client"
import { GetServerSideProps, NextPage } from "next"

const listingsArr: Listing[] = []

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

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  console.log({ query })

  return {
    props: {
      listings: listingsArr,
    },
  }
}
