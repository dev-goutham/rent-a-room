import CTA from "@frontend/sections/CTA"
import HeroArea from "@frontend/sections/HeroArea"
import PremiumListings from "@frontend/sections/PremiumListings"
import { NextPage } from "next"

const Index: NextPage = () => {
  return (
    <div>
      <HeroArea />
      <CTA />
      <PremiumListings />
    </div>
  )
}

export default Index
