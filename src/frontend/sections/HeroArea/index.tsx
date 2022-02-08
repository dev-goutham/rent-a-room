import HeroImageGrid from "@frontend/components/HeroImageGrid"
import SearchBar from "@frontend/ui/SearchBar"
import Section from "@frontend/ui/Section"
import React from "react"

const HeroArea: React.FC = () => {
  const search = () => {
    console.log("searchh")
  }

  return (
    <Section>
      <div className="bg-contain bg-no-repeat bg-[url('/images/map-background.jpg')]">
        <h1 className="mb-6 text-4xl font-bold text-blue-800">
          Find rooms in places you want to visit
        </h1>
        <div className="mb-8 md:mb-16 lg:mb-20">
          <SearchBar handleSubmit={search} />
        </div>
        <div className="flex justify-center">
          <HeroImageGrid />
        </div>
      </div>
    </Section>
  )
}

export default HeroArea
