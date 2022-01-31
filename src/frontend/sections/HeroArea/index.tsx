import HeroImageGrid from "@frontend/components/HeroImageGrid"
import SearchBar from "@frontend/ui/SearchBar"
import React from "react"

const HeroArea: React.FC = () => {
  const search = () => {
    console.log("searchh")
  }

  return (
    <section className="mt-6 bg-contain bg-no-repeat bg-[url('/images/map-background.jpg')]">
      <h1 className="mb-6 text-2xl font-bold text-blue-800">
        Find rooms in places you want to visit
      </h1>
      <div className="mb-4">
        <SearchBar handleSubmit={search} />
      </div>
      <HeroImageGrid />
    </section>
  )
}

export default HeroArea
