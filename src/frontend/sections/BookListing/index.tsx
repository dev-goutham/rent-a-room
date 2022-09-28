import useAuth from "@frontend/store/auth"
import Button from "@frontend/ui/Button"
import axios from "axios"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import DatePicker from "@frontend/components/DatePicker"
import { toast, Toaster } from "react-hot-toast"

const BookListing: React.FC<{ price: number; listingId: string }> = ({
  price,
  listingId,
}) => {
  const [checkInDate, setCheckInDate] = useState<Date | null>(null)
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null)
  const { isLoggedIn, user } = useAuth()
  const Router = useRouter()

  const bookListing = async () => {
    try {
      await axios.post("/api/booking", {
        listingId,
        checkInDate,
        checkOutDate,
      })
      toast.success("Booking successful")
      Router.push(`/user/${user?.id}`)
    } catch (error) {
      toast.error("Something went wrong.")
      console.log(error)
    }
  }

  const connectWithStripe = async () => {
    window.open(
      `https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_STRIPE_CLIENT_ID}&scope=read_write`,
    )
  }

  return (
    <div className="self-start h-auto px-8 mx-auto text-center border-[1px] max-w-[350px] md:max-w-[400px] w-[350px] md:w-[400px]  border-slate-300">
      <Toaster />
      <div className=" divide-y-[1px] divide-slate-200">
        <div className="py-8 tracking-wider">
          <span className="text-3xl font-semibold text-blue-800">
            ${price / 100}
          </span>
          <span className="text-3xl text-slate-300">/day</span>
        </div>
        <div>
          <div className="py-4">
            <div className="py-2 font-semibold">Check In</div>
            <div>
              <DatePicker
                onDateSelected={(date: Date | null) => {
                  setCheckInDate(date)
                }}
                isDisabled={!isLoggedIn}
              />
            </div>
          </div>
          <div className="pb-8">
            <div className="py-2 font-semibold">Check Out</div>
            <div>
              <DatePicker
                onDateSelected={(date) => {
                  setCheckOutDate(date)
                }}
                isDisabled={checkInDate === null}
                minDate={checkInDate || undefined}
              />
            </div>
          </div>
        </div>
        <div className="py-8">
          <Button
            onClick={bookListing}
            variant="fill"
            isDisabled={!checkInDate || !checkOutDate}
          >
            Request to book
          </Button>
        </div>
        {!user?.walletId && (
          <div className="py-8">
            <Button onClick={connectWithStripe} variant="fill">
              Connect with stripe to book listings
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default BookListing
