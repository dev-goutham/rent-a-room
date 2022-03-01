import Image from "next/image"
import React from "react"
import { AiFillHome, AiOutlineUser } from "react-icons/ai"

interface Props {
  title: string
  address: string
  price: number
  numberOfGuests: number
  imageUrl: string
}

const ListingCard: React.FC<Props> = ({
  imageUrl,
  title,
  address,
  price,
  numberOfGuests,
}) => {
  return (
    <div className="relative border-2 rounded-sm border-slate-200">
      <Image src={imageUrl} alt={title} height={195} width={320} />
      <div className="px-6 py-2">
        <p className="my-2 text-xl font-semibold text-blue-700">
          ${price}
          <span className="font-normal text-gray-400 text-md">/day</span>
        </p>
        <h2 className="text-sm font-semibold truncate ... text-gray-600">
          {title}
        </h2>
        <address className="mb-4 text-sm truncate ... text-gray-600">
          {address}
        </address>
        <div className="flex items-center justify-between leading-none">
          <AiFillHome className="text-blue-500" />
          <div className="flex items-center gap-2">
            <AiOutlineUser className="text-blue-500" />
            <span className="text-sm text-gray-400">
              {numberOfGuests} guests
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListingCard
