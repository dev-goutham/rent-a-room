import Image from "next/image"
import React from "react"

interface Props {
  imageUrl: string
  imageAlt: string
  title: string
}

const HeroImage: React.FC<Props> = ({ imageAlt, imageUrl, title }) => {
  return (
    <div className="relative w-full h-[300px] md:h-[490px]">
      <div className="absolute top-0 left-0 z-10 w-full h-full ease-in duration-300 bg-blue-800 rounded-md opacity-[0.15] hover:opacity-0" />
      <Image
        className="z-0 rounded-md"
        src={imageUrl}
        alt={imageAlt}
        layout="fill"
        objectFit="cover"
      />
      <h4 className="absolute px-2 py-1 font-semibold rounded-md bottom-4 left-4 bg-slate-100 text-slate-600">
        {title}
      </h4>
    </div>
  )
}

export default HeroImage
