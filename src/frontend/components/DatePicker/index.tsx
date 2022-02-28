import React, { useState } from "react"
import ReactDatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { BsCalendarEvent } from "react-icons/bs"

interface Props {
  minDate?: Date
  onDateSelected: (date: Date | null) => void
  isDisabled?: boolean
}

const DatePicker: React.FC<Props> = ({
  minDate,
  isDisabled,
  onDateSelected,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  return (
    <div className="relative">
      <ReactDatePicker
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date)
          onDateSelected(date)
        }}
        minDate={minDate || new Date()}
        disabled={isDisabled}
        calendarClassName="flex justify-between"
        wrapperClassName={`flex justify-between`}
        customInput={React.createElement(CustomInput)}
        dateFormat="dd-MM-yyyy"
      />
    </div>
  )
}

// eslint-disable-next-line react/display-name
const CustomInput = React.forwardRef<
  HTMLButtonElement,
  {
    value: string
    onClick: React.MouseEventHandler<HTMLButtonElement>
    disabled: boolean
  }
>(({ value, onClick, disabled }, ref) => {
  return (
    <button
      className={`px-3 py-2 w-[165px] leading-none border-[1px] rounded-md border-slate-400 ${
        disabled ? "opacity-60 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      ref={ref}
    >
      <div className="flex items-center justify-between gap-2">
        <div className={`${!value ? "text-slate-400" : "text-slate-600"}`}>
          {value || "select date"}{" "}
        </div>
        <BsCalendarEvent className="inline-block text-slate-500" />
      </div>
    </button>
  )
})

export default DatePicker
