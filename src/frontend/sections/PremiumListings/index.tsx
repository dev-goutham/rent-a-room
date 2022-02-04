import ListingCardsGrid from "@frontend/components/ListingCardsGrid"
import Section from "@frontend/ui/Section"
import React from "react"

const listings: IListing[] = [
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
]

const PremiumListings: React.FC = () => {
  return (
    <Section>
      <ListingCardsGrid listings={listings} />
    </Section>
  )
}

export default PremiumListings
