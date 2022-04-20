import CTA from "@frontend/sections/CTA"
import HeroArea from "@frontend/sections/HeroArea"
import PremiumListings from "@frontend/sections/PremiumListings"
import { NextPage, GetServerSideProps } from "next"
import { Listing } from "@prisma/client"
import prisma from "@backend/lib/prisma"

interface Props {
  premiumListings: Listing[]
}

const Index: NextPage<Props> = ({ premiumListings }) => {
  return (
    <div>
      <HeroArea />
      <CTA />
      <PremiumListings listings={premiumListings} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const listings = await prisma.listing.findMany({
      orderBy: {
        price: "desc",
      },
      take: 4,
    })
    return {
      props: {
        premiumListings: listings,
      },
    }
  } catch (error) {
    console.log(error)
    return {
      props: {
        premiumListings: [],
      },
    }
  }
}

export default Index
