import ListingCard from "@frontend/components/ListingCard"
import Link from "next/link"
import React from "react"

interface IListing {
  id: string
  title: string
  address: string
  price: number
  numberOfGuests: number
  imageUrl: string
}

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
    <section className="flex justify-center">
      <div className="grid  gap-4 grid-cols-[320px] md:grid-cols-[320px_320px] lg:grid-cols-[320px_320px_320px_320px]">
        {listings.map((l) => (
          <Link key={l.id} href={`/listing/${l.id}`}>
            <a>
              <ListingCard {...l} />
            </a>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default PremiumListings
