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
    city: "Toronto",
    host: {
      username: "Goutham",
      avatarUrl:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto:compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    type: "apartment",
    description:
      "Located on a quiet peaceful residential street, this 2 bedroom townhouse is a perfect accommodation for those wishing to enjoy their stay in London without breaking the bank.",
  },
  {
    id: "2",
    imageUrl:
      "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    address: "20 Overlook St, Toronto, ON, CA",
    title: "Chic downtown condo",
    numberOfGuests: 4,
    price: 200,
    city: "Toronto",
    host: {
      username: "Goutham",
      avatarUrl:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto:compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    type: "apartment",
    description:
      "Located on a quiet peaceful residential street, this 2 bedroom townhouse is a perfect accommodation for those wishing to enjoy their stay in London without breaking the bank.",
  },
  {
    id: "3",
    imageUrl:
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    address: "20 Overlook St, Toronto, ON, CA",
    title: "Chic downtown condo",
    numberOfGuests: 4,
    price: 200,
    city: "Toronto",
    host: {
      username: "Goutham",
      avatarUrl:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto:compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    type: "apartment",
    description:
      "Located on a quiet peaceful residential street, this 2 bedroom townhouse is a perfect accommodation for those wishing to enjoy their stay in London without breaking the bank.",
  },
  {
    id: "4",
    imageUrl:
      "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    address: "20 Overlook St, Toronto, ON, CA",
    title: "Chic downtown condo",
    numberOfGuests: 4,
    price: 200,
    city: "Toronto",
    host: {
      username: "Goutham",
      avatarUrl:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto:compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    type: "apartment",
    description:
      "Located on a quiet peaceful residential street, this 2 bedroom townhouse is a perfect accommodation for those wishing to enjoy their stay in London without breaking the bank.",
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
