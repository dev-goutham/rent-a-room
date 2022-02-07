import React from "react"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Image from "next/image"
import ListingBookCta from "@frontend/components/BookListingCta"
import Link from "next/link"
import { HiLocationMarker } from "react-icons/hi"
import Tag from "@frontend/ui/Tag"

interface Props {
  listing: IListing
}

const ListingDetails: React.FC<{
  listing: IListing
}> = ({
  listing: {
    imageUrl,
    title,
    address,
    city,
    host,
    type,
    numberOfGuests,
    description,
  },
}) => {
  return (
    <div>
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
      <h3 className="mb-6 text-3xl font-semibold text-blue-800">{title}</h3>
      <Link href={`/user/${1}`}>
        <a className="flex items-center gap-4 py-4 mb-4 leading-none border-t-2 border-b-2 border-slate-200">
          <img
            src={host.avatarUrl}
            alt={host.username}
            className="inline-block object-cover w-[3.5rem] h-[3.5rem] rounded-full"
          />
          <div className="text-4xl font-semibold tracking-wide capitalize font-display">
            {host.username}
          </div>
        </a>
      </Link>
      <div>
        <h4 className="text-xl font-semibold text-blue-800">
          About this space
        </h4>
        <div className="my-1 space-x-2">
          <Tag>{type}</Tag>
          <Tag>{numberOfGuests} guests</Tag>
        </div>
      </div>
      <div className="mt-2">
        <p>{description}</p>
      </div>
    </div>
  )
}

const Listing: NextPage<Props> = ({ listing }) => {
  return (
    <div className="pt-12 max-w-[1280px] mx-auto">
      <div className="justify-between lg:flex">
        <ListingDetails listing={listing} />
        <ListingBookCta price={listing.price} />
      </div>
    </div>
  )
}

export default Listing

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      listing: {
        id: "1",
        imageUrl:
          "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        address: "20 Overlook St, Toronto, ON, CA",
        title: "Chic downtown condo",
        numberOfGuests: 4,
        city: "Toronto",
        price: 200,
        host: {
          username: "Goutham",
          avatarUrl:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto:compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        type: "apartment",
        description:
          "Located on a quiet peaceful residential street, this 2 bedroom townhouse is a perfect accommodation for those wishing to enjoy their stay in London without breaking the bank.",
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  }
}
