import HeroImageGrid from "@frontend/components/HeroImageGrid"
import Container from "@frontend/ui/Container"
import SearchBar from "@frontend/ui/SearchBar"
import React from "react"

const HeroArea: React.FC = () => {
  const search = () => {
    console.log("searchh")
  }

  return (
    <Container>
      <div className=" mt-6 bg-contain bg-no-repeat bg-[url('/images/map-background.jpg')]">
        <h1 className="mb-4 text-xl font-bold text-slate-600">
          Find rooms in places you want to visit
        </h1>
        <div className="mb-3">
          <SearchBar handleSubmit={search} />
        </div>
        <HeroImageGrid />
      </div>
    </Container>
  )
}

export default HeroArea
