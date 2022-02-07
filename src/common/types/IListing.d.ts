interface IListing {
  id: string
  title: string
  city: string
  address: string
  price: number
  numberOfGuests: number
  imageUrl: string
  type: "apartment" | "house"
  host: {
    username: string
    avatarUrl: string
  }
  description: string
}
