import React from "react"
import Image from "next/image"
import Link from "next/link"
import { HiLocationMarker } from "react-icons/hi"
import Tag from "@frontend/ui/Tag"
import { Listing, User } from "@prisma/client"

const ListingDetails: React.FC<{
  listing: Listing
  host: User
}> = ({
  listing: {
    imageUrl,
    title,
    address,
    city,
    listingType,
    numberOfGuests,
    description,
  },
  host,
}) => {
  return (
    <div className="max-w-[740px]">
      <Image
        src={imageUrl}
        className="block mb-4"
        alt={title}
        height={570}
        width={740}
      />
      <div className="flex gap-4 font-semibold">
        <Link href={`/listings/${city}`}>
          <a className="flex items-center gap-1 text-sm leading-none text-blue-500">
            <span>
              <HiLocationMarker />
            </span>
            <span>{city}</span>
          </a>
        </Link>
        <div className="text-sm text-slate-500">{address}</div>
      </div>
      <h3 className="mb-6 text-2xl font-semibold text-blue-800">{title}</h3>
      <Link href={`/user/${host.id}`}>
        <a className="flex items-center gap-4 py-6 mb-4 leading-none border-t-[1px] border-b-[1px] border-slate-300">
          <img
            src={host.image}
            alt={host.name}
            className="inline-block object-cover w-[3.5rem] h-[3.5rem] rounded-full"
          />
          <div className="text-4xl font-semibold tracking-wide capitalize font-display">
            {host.name}
          </div>
        </a>
      </Link>
      <div>
        <h4 className="text-xl font-semibold text-blue-800">
          About this space
        </h4>
        <div className="my-1 space-x-2">
          <Tag>{listingType}</Tag>
          <Tag>{numberOfGuests} guests</Tag>
        </div>
      </div>
      <div className="mb-4">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ListingDetails
