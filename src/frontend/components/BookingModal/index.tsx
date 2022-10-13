import React from "react"
import { AiFillCloseCircle } from "react-icons/ai"
import { Dialog } from "@headlessui/react"
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"
import Button from "@frontend/ui/Button"
import axios from "axios"
import { Toaster, toast } from "react-hot-toast"

const StripeCheckoutForm: React.FC<{
  listingId: string
  amount: number
  checkInDate: string
  checkOutDate: string
}> = ({ amount, listingId, checkInDate, checkOutDate }) => {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    if (elements === null || stripe === null) {
      return
    } else {
      try {
        const { token } = await stripe.createToken(
          elements.getElement(CardElement)!,
        )

        if (!token) {
          return
        }
        await axios.post(`/api/booking`, {
          amount,
          listingId,
          checkInDate,
          checkOutDate,
          token: token.id,
        })
        toast.success("Booking successful")
      } catch (error) {
        toast.error("Something went wrong!")
      }

      // try {
      // } catch (error) {
      //   console.log("something went wrong")
      //   console.log(error)
      // }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <CardElement
          options={{
            hidePostalCode: true,
          }}
        />
      </div>
      <Button variant="fill" type="submit" isDisabled={!stripe || !elements}>
        Pay
      </Button>
    </form>
  )
}

interface Props {
  startDate: Date
  endDate: Date
  pricePerDay: number
  isOpen: boolean
  close: () => void
  listingId: string
}

const toCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount / 100)
}

const BookingModal: React.FC<Props> = ({
  isOpen,
  close,
  startDate,
  endDate,
  pricePerDay,
  listingId,
}) => {
  const numberOfDays = Math.ceil(
    ((endDate as unknown as number) - (startDate as unknown as number)) /
      (1000 * 60 * 60 * 24),
  )

  const totalPrice = pricePerDay * numberOfDays

  const fees = (totalPrice * 5) / 100

  return (
    <Dialog
      as="div"
      className="fixed inset-0 w-screen h-screen z-[9999] flex items-center justify-center"
      open={isOpen}
      onClose={close}
    >
      <Toaster />
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <Dialog.Panel className="w-[500px] text-center rounded-lg px-8 py-14 relative  max-w-3/4 max-h-3/4 text-slate-700 bg-white">
        <button onClick={close} className="absolute top-8 right-8">
          <AiFillCloseCircle size={24} />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-center">Book Listing</h1>
          <p className="mt-2 text-center text-slate-500 text-md">
            Confirm payment to book the listing from <br />
            <span className="font-bold bg-yellow-200 text-slate-700 ">
              {startDate.toLocaleDateString("en-GB")}
            </span>{" "}
            to{" "}
            <span className="font-bold bg-yellow-200 text-slate-700 ">
              {endDate.toLocaleDateString("en-GB")}
            </span>
          </p>
        </div>
        <hr className="my-6" />
        <table className="flex justify-center">
          <tbody className="text-left text-slate-600">
            <tr>
              <td className="pr-12">
                {toCurrency(pricePerDay)} x {numberOfDays} days
              </td>
              <td className="font-bold">{toCurrency(totalPrice)}</td>
            </tr>
            <tr>
              <td className="pr-12">
                <span>Rent-a-Room's fee</span>
                <span className="ml-1 text-xs text-blue-500">(5%)</span>
              </td>
              <td className="font-bold">{toCurrency(fees)}</td>
            </tr>
            <tr className="font-bold">
              <td>Total</td>
              <td className="bg-yellow-200 text-slate-800">
                {toCurrency(totalPrice + fees)}
              </td>
            </tr>
          </tbody>
        </table>
        <hr className="my-6" />
        <StripeCheckoutForm
          listingId={listingId}
          checkInDate={startDate.toDateString()}
          checkOutDate={endDate.toDateString()}
          amount={totalPrice}
        />
      </Dialog.Panel>
    </Dialog>
  )
}

export default BookingModal
