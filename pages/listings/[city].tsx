import ListingCardsGrid from "@frontend/components/ListingCardsGrid"
import Pagination from "@frontend/components/Pagination"
import Section from "@frontend/ui/Section"
import Sort from "@frontend/ui/Sort"
import { GetServerSideProps, NextPage } from "next"

const listingsArr: IListing[] = [
  {
    id: "1",
    imageUrl:
      "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    address: "20 Overlook St, Toronto, ON, CA",
    title: "Chic downtown condo",
    numberOfGuests: 4,
    price: 200,
  },
  {
    id: "2",
    imageUrl:
      "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    address: "20 Overlook St, Toronto, ON, CA",
    title: "Chic downtown condo",
    numberOfGuests: 4,
    price: 200,
  },
  {
    id: "3",
    imageUrl:
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    address: "20 Overlook St, Toronto, ON, CA",
    title: "Chic downtown condo",
    numberOfGuests: 4,
    price: 200,
  },
  {
    id: "4",
    imageUrl:
      "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    address: "20 Overlook St, Toronto, ON, CA",
    title: "Chic downtown condo",
    numberOfGuests: 4,
    price: 200,
  },
  {
    id: "5",
    imageUrl:
      "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    address: "20 Overlook St, Toronto, ON, CA",
    title: "Chic downtown condo",
    numberOfGuests: 4,
    price: 200,
  },
  {
    id: "6",
    imageUrl:
      "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    address: "20 Overlook St, Toronto, ON, CA",
    title: "Chic downtown condo",
    numberOfGuests: 4,
    price: 200,
  },
  {
    id: "7",
    imageUrl:
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    address: "20 Overlook St, Toronto, ON, CA",
    title: "Chic downtown condo",
    numberOfGuests: 4,
    price: 200,
  },
  {
    id: "8",
    imageUrl:
      "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    address: "20 Overlook St, Toronto, ON, CA",
    title: "Chic downtown condo",
    numberOfGuests: 4,
    price: 200,
  },
]

interface Props {
  listings: IListing[]
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
