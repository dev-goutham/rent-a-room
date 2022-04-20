import * as yup from "yup"
import { ListingType } from "@prisma/client"

const schema = yup.object().shape({
  listingType: yup
    .string()
    .oneOf(
      [ListingType.APARTMENT, ListingType.HOUSE],
      "Listing type must be Apartment or House",
    )
    .required("Listing type is a required field"),
  address: yup.string().required("Address is required"),
  title: yup.string().required("Title is required"),
  description: yup
    .string()
    .required("Description is required")
    .max(400)
    .min(25),
  city: yup.string().required("City is required"),
  country: yup.string().required("Please select the country from the dropdown"),
  state: yup.string().required("State is required"),
  zipCode: yup.string().required("Zipcode is required"),
  price: yup
    .number()
    .positive("Price must be a valid number")
    .required("Price is required"),
  numberOfGuests: yup
    .number()
    .positive("Number of guests must be a valid number")
    .required("Number of guests is required"),
  image: yup
    .mixed()
    .required("Image is required")
    .test("Image is required", (value) => value && value[0])
    .test("Image file must be 1 MB or lower", (value) => {
      if (!value || !value[0]) {
        return false
      }
      return value[0]?.size < 1000000
    })
    .test("Image must be either an .jpeg or .png", (value) => {
      if (!value || !value[0]) {
        return false
      }
      return value[0].type === "image/jpeg" || value[0].type === "image/png"
    }),
})

export default schema
