import ListingCardsGrid from "@frontend/components/ListingCardsGrid"
import Pagination from "@frontend/components/Pagination"
import Section from "@frontend/ui/Section"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"

interface Props {
  user: IUser
}
const User: NextPage<Props> = ({
  user: { avatarUrl, username, contact, listings },
}) => {
  return (
    <div className="mx-auto max-w-[1328px] pt-12">
      <div className="flex justify-center">
        <div className="px-4 border-[1px] border-slate-300 mb-12 w-[390px]">
          <div className="divide-y-[1px] divide-slate-300">
            <div className="flex justify-center py-8">
              <img
                src={avatarUrl}
                alt={username}
                className="inline-block object-cover w-24 h-24 rounded-full "
              />
            </div>
            <div className="py-4 space-y-2">
              <h4 className="text-xl font-semibold text-blue-800">Details</h4>
              <p>
                Name:
                <span className="ml-2 font-semibold" ml-2>
                  {username}
                </span>
              </p>
              <p>
                Contact:
                <span className="ml-2 font-semibold">{contact}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="mb-4 text-xl font-semibold text-blue-800">Listings</h2>
        <ListingCardsGrid listings={listings} />
      </div>
    </div>
  )
}

export default User

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      user: {
        id: "1",
        username: "Goutham",
        avatarUrl:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto:compress&cs=tinysrgb&dpr=2&h=650&w=940",
        contact: "dev.gouthamram95@gmail.com",
        listings: [
          {
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
        ],
      },
    },
    revalidate: 1,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: "blocking",
    paths: [],
  }
}
