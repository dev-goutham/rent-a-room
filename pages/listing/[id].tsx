import React from "react"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import ListingBookCta from "@frontend/sections/BookListing"
import ListingDetails from "@frontend/sections/ListingDetails"

interface Props {
  listing: IListing
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
