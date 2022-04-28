import { InternalServerError } from "http-errors"
import NodeGeoCoder from "node-geocoder"

const geocoder = NodeGeoCoder({
  provider: "openstreetmap",
  language: "en",
})

const getGeoCodeData = async (address: string) => {
  try {
    const res = await geocoder.geocode(address)
    const { formattedAddress, city, state, country } = res[0]
    return {
      formattedAddress,
      city,
      state,
      country,
    }
  } catch (error) {
    console.log(error)
    throw new InternalServerError("Could not geocode location")
  }
}

export default getGeoCodeData
