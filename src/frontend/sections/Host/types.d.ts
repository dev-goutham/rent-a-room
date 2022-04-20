import { ListingType } from "@prisma/client"

export interface FormFields {
  listingType: ListingType
  numberOfGuests: number
  title: string
  description: string
  address: string
  country: string
  state: string
  city: string
  zipCode: number
  image: File[]
  price: number
}
