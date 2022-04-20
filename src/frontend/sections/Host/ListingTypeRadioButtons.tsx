import { ListingType } from "@prisma/client"
import React from "react"
import { UseFormRegister, FieldError } from "react-hook-form"
import { MdApartment, MdOutlineHouse } from "react-icons/md"
import FormError from "./FormError"
import Required from "./Reauired"
import { FormFields } from "./types"

const ListingTypeRadioButtons: React.FC<{
  register: UseFormRegister<FormFields>
  checkedValue: ListingType
  error: FieldError | undefined
}> = ({ register, checkedValue, error }) => {
  return (
    <div className="mt-6">
      <div>
        <Required />
        Home Type
      </div>
      <div className="flex">
        <label
          htmlFor="listingType-apartment"
          className={`flex  items-center h-[35px] gap-1 w-[125px] justify-center leading-none border-2  rounded-l-md border-r-[1px] ${
            checkedValue === ListingType.APARTMENT
              ? "border-blue-400 text-blue-400"
              : "border-slate-300 text-inherit"
          } `}
        >
          <input
            type="radio"
            value={ListingType.APARTMENT}
            id="listingType-apartment"
            {...register("listingType")}
            className="hidden"
          />
          <span>
            <MdApartment className="inline-block w-5 h-5 font-thin leading-none " />
          </span>
          <span className="inline-block leading-none ">Apartment</span>
        </label>
        <label
          className={`flex items-center h-[35px] gap-1 w-[125px] justify-center leading-none border-2  rounded-r-md border-l-[1px] ${
            checkedValue === ListingType.HOUSE
              ? "border-blue-400 text-blue-400"
              : "border-slate-300 text-inherit"
          } `}
          htmlFor="listingType-house"
        >
          <input
            type="radio"
            value={ListingType.HOUSE}
            id="listingType-house"
            {...register("listingType")}
            className="hidden"
          />
          <span>
            <MdOutlineHouse className="inline-block w-5 h-5 font-thin leading-non" />
          </span>
          <span className="inline-block leading-none">House</span>
        </label>
      </div>
      {error && <FormError message={error.message} />}
    </div>
  )
}

export default ListingTypeRadioButtons
