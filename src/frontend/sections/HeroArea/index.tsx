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
        <h1 className="mb-6 text-2xl font-bold text-blue-800">
          Find rooms in places you want to visit
        </h1>
        <div className="mb-4">
          <SearchBar handleSubmit={search} />
        </div>
        <HeroImageGrid />
      </div>
    </Section>
  )
}

export default HeroArea
