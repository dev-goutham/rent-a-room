import { useForm, FieldError } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import Button from "@frontend/ui/Button"
import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import countryList from "react-select-country-list"
import { toast, Toaster } from "react-hot-toast"
import { useRouter } from "next/router"

import schema from "./utils/schema"
import { FormFields } from "./types"
import FormError from "./FormError"
import Required from "./Reauired"
import ListingTypeRadioButtons from "./ListingTypeRadioButtons"
import ImageUpload from "./ImageUpload"
import base64Converter from "./utils/base64Converter"

const Host: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormFields>({
    resolver: yupResolver(schema),
    reValidateMode: "onBlur",
    mode: "onTouched",
  })

  const router = useRouter()
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false)
  const listingType = watch("listingType")
  const [base64Image, setBase64Image] = useState<string | null>(null)

  const images = watch("image")

  useEffect(() => {
    if (!images || !images[0]) {
      return
    }

    base64Converter(images[0])
      .then((res) => {
        setBase64Image(res as string)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [images])

  const submitForm = useCallback(async (data: FormFields) => {
    setIsSubmitDisabled(true)
    try {
      const result = await axios.post<{ listing: { id: string } }>(
        `/api/listing`,
        {
          ...data,
          image: base64Image,
        },
      )
      reset()
      setIsSubmitDisabled(false)
      toast.success("Successfully created a listing.", {
        duration: 5000,
      })
      router.push(`/listing/${result.data.listing.id}`)
    } catch (error) {
      reset()
      setBase64Image(null)
      setIsSubmitDisabled(false)
      toast.error(
        "Something went wrong while creating this listing. Please try again",
        { duration: 5000 },
      )
    }
  }, [])

  return (
    <div className="max-w-[480px] mx-auto">
      <Toaster position="top-center" />
      <h2 className="text-2xl font-semibold text-blue-800">
        Let&apos;s get your place listed
      </h2>
      <form onSubmit={handleSubmit(submitForm)} className="space-y-6">
        <ListingTypeRadioButtons
          error={errors.listingType}
          checkedValue={listingType}
          register={register}
        />
        <div>
          <Required />
          <label htmlFor="numberOfGuests">Max number of Guests</label>
          <input
            type="number"
            id="numberOfGuests"
            {...register("numberOfGuests")}
            className="block rounded-md w-[75px] border-slate-300 focus:ring-blue-400 placeholder:text-slate-300"
            placeholder="4"
          />
          {errors.numberOfGuests && (
            <FormError message={errors.numberOfGuests.message} />
          )}
        </div>
        <div>
          <Required />
          <label htmlFor="title">Title</label>
          <input
            className="w-full rounded-md border-slate-300 focus:ring-blue-400 placeholder:text-slate-300"
            type="text"
            id="title"
            {...register("title")}
            placeholder="Lakefront house for 4"
          />
          {errors.title && <FormError message={errors.title.message} />}
        </div>
        <div>
          <Required />
          <label htmlFor="description">Description</label>
          <textarea
            className="block w-full rounded-md border-slate-300 focus:ring-blue-400 placeholder:text-slate-300"
            id="description"
            {...register("description")}
            placeholder="Clean and spacious abode ..."
          />
          <span className="text-xs font-semibold text-slate-400">
            Max 400 characters
          </span>
          {errors.description && (
            <FormError message={errors.description.message} />
          )}
        </div>
        <div>
          <Required />
          <label htmlFor="address">Address</label>
          <input
            className="block w-full rounded-md border-slate-300 focus:ring-blue-400 placeholder:text-slate-300"
            type="text"
            id="address"
            {...register("address")}
            placeholder="250, imaginay avenue"
          />
          {errors.address && <FormError message={errors.address.message} />}
        </div>
        <div>
          <Required />
          <label htmlFor="country">Country</label>
          <select
            className="block w-full rounded-md border-slate-300 focus:ring-blue-400"
            {...register("country")}
          >
            <option>{""}</option>
            {countryList()
              .getData()
              .map((country) => (
                <option key={country.label}> {country.label} </option>
              ))}
          </select>
          {errors.country && <FormError message={errors.country.message} />}
        </div>

        <div>
          <Required />
          <label htmlFor="state">State/Province</label>
          <input
            className="block w-full rounded-md border-slate-300 focus:ring-blue-400 placeholder:text-slate-300"
            {...register("state")}
            id="state"
            type="text"
            placeholder="New York"
          />
          {errors.state && <FormError message={errors.state.message} />}
        </div>
        <div>
          <Required />
          <label htmlFor="city">City/Town</label>
          <input
            className="block w-full rounded-md border-slate-300 focus:ring-blue-400 placeholder:text-slate-300"
            {...register("city")}
            id="city"
            type="text"
            placeholder="New York"
          />
          {errors.city && <FormError message={errors.city.message} />}
        </div>
        <div>
          <Required />
          <label htmlFor="zipCode">Zip Code</label>
          <input
            className="block w-full rounded-md border-slate-300 focus:ring-blue-400 placeholder:text-slate-300"
            {...register("zipCode")}
            id="zipCode"
            type="text"
            placeholder="50040"
          />
          {errors.zipCode && <FormError message={errors.zipCode.message} />}
        </div>
        <ImageUpload
          error={errors.image as unknown as FieldError | undefined}
          watch={watch}
          register={register}
        />
        <div>
          <Required />
          <label htmlFor="price">Price in cents</label>
          <input
            className="block rounded-md w-[100px] border-slate-300 focus:ring-blue-400 placeholder:text-slate-300"
            type="number"
            {...register("price")}
            id="price"
            placeholder="400"
          />
          {errors.price && <FormError message={errors.price.message} />}
        </div>
        <Button
          isDisabled={isSubmitDisabled}
          fullSize
          variant="fill"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  )
}

export default Host
