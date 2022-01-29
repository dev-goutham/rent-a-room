import HeroImage from "@frontend/ui/HeroImage"
import Link from "next/link"
import React from "react"

const images = [
  { url: "/images/Dubai.jpg", title: "Dubai" },
  { url: "/images/London.jpg", title: "London" },
  { url: "/images/Los-Angeles.jpg", title: "Los-Angeles" },
  { url: "/images/Toronto.jpg", title: "Toronto" },
]

const HeroImageGrid: React.FC = () => {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-[1fr] md:grid-cols-[300px_300px] lg:grid-cols-[300px_300px_300px_300px] gap-4">
          {images.map((image) => (
            <Link key={image.title} href={`/listings/${image.title}`}>
              <a>
                <HeroImage
                  imageUrl={image.url}
                  imageAlt={image.title}
                  title={image.title}
                />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default HeroImageGrid
