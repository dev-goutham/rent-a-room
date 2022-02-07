import Button from "@frontend/ui/Button"
import React, { useState } from "react"
import DatePicker from "../DatePicker"

const BookListingCta: React.FC<{ price: number }> = ({ price }) => {
  const [checkInDate, setCheckInDate] = useState<Date | null>(null)
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null)

  return (
    <div className="self-start h-auto px-8 text-center border-[1px]  border-slate-300">
      <div className="w-[350px] divide-y-[1px] divide-slate-200">
        <div className="py-8 tracking-wider">
          <span className="text-4xl font-semibold text-blue-800">${price}</span>
          <span className="text-2xl text-slate-300">/day</span>
        </div>
        <div>
          <div className="py-4">
            <div className="py-2 font-semibold">Check In</div>
            <div>
              <DatePicker
                onDateSelected={(date: Date | null) => {
                  setCheckInDate(date)
                }}
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
          <Button variant="fill" isDisabled={!checkInDate || !checkOutDate}>
            Request to book
          </Button>
        </div>
      </div>
    </div>
  )
}

export default BookListingCta
