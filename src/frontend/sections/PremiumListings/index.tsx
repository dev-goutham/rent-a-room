import ListingCardsGrid from "@frontend/components/ListingCardsGrid"
import Section from "@frontend/ui/Section"
import React from "react"
import { Listing } from "@prisma/client"

const PremiumListings: React.FC<{ listings: Listing[] }> = ({ listings }) => {
  return (
    <Section>
      <h3 className="mb-3 text-4xl font-semibold text-center text-blue-800">
        Premium Listings
      </h3>
      <ListingCardsGrid listings={listings} />
    </Section>
  )
}

export default PremiumListings
