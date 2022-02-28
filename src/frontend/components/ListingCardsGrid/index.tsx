import { Listing } from "@prisma/client"
import Link from "next/link"
import React from "react"
import ListingCard from "../ListingCard"

interface Props {
  listings: Listing[]
}

const ListingCardsGrid: React.FC<Props> = ({ listings }) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="grid  gap-4 grid-cols-[320px] md:grid-cols-[320px_320px] lg:grid-cols-[320px_320px_320px_320px]">
          {listings.map((l) => (
            <Link key={l.id} href={`/listing/${l.id}`}>
              <a>
                <ListingCard {...l} />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default ListingCardsGrid
