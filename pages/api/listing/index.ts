import nextConnect from "@backend/lib/nextConnect"
import isAuthenticated from "@backend/middleware/isAuthenticated"
import schemaValidate from "@backend/middleware/schemaValidate"
import { ApiHandler } from "@backend/typings"
import { ListingType } from "@prisma/client"
import * as joi from "joi"
import prisma from "@backend/lib/prisma"
import uploadImage from "@backend/utils/uploadImage"
import hasWallet from "@backend/middleware/hasWallet"

type Schema = {
  listingType: ListingType
  numberOfGuests: number
  title: string
  description: string
  address: string
  city: string
  state: string
  zipCode: string
  image: string
  price: number
  country: string
}

const schema = joi.object<Schema>({
  listingType: joi
    .string()
    .valid(ListingType.APARTMENT, ListingType.HOUSE)
    .required(),
  address: joi.string().required(),
  country: joi.string().required(),
  numberOfGuests: joi.number().min(1).required(),
  title: joi.string().required(),
  description: joi.string().required(),
  city: joi.string().required(),
  image: joi.string().required(),
  price: joi.number().min(1).required(),
  state: joi.string().required(),
  zipCode: joi.string().required(),
})

const createListing: ApiHandler = async (req, res) => {
  const userId = req.user!.id
  const {
    address,
    city,
    description,
    image,
    listingType,
    numberOfGuests,
    price,
    state,
    title,
    country,
  } = req.body as Schema
  const imageUrl = await uploadImage(image)
  const listing = await prisma.listing.create({
    data: {
      address,
      city,
      description,
      listingType,
      numberOfGuests,
      price,
      state,
      title,
      imageUrl,
      country,
      userId,
    },
  })
  res.json({ listing })
}

export default nextConnect()
  .use(isAuthenticated)
  .use(hasWallet)
  .use(schemaValidate(schema))
  .post(createListing)
