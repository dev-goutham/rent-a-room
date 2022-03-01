import { ListingType } from "@prisma/client"
import { NextPage } from "next"
import { useForm } from "react-hook-form"
import yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

interface FormFields {
  listingType: ListingType
  numberOfGuests: number
  title: string
  description: string
  address: string
  city: string
  state: string
  zipCode: number
  image: File
  price: number
}

const schema = yup.object().shape({
  listingType: yup
    .string()
    .oneOf([ListingType.APARTMENT, ListingType.HOUSE])
    .required(),
  address: yup.string().required(),
  title: yup.string().required(),
  description: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zipCode: yup.number().required(),
  price: yup.number().positive().required(),
  numberOfGuests: yup.number().positive().required(),
  image: yup.string(),
})

const Host: NextPage = () => {
  const { register } = useForm<FormFields>({
    resolver: yupResolver(schema),
  })

  return (
    <div className="max-w-[480px] mx-auto">
      <h2 className="text-2xl font-semibold text-blue-800">
        Let&apos;s get your place listed
      </h2>
      <form></form>
    </div>
  )
}

export default Host
