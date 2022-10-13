import Stripe from "stripe"

export const client = new Stripe(`${process.env.STRIPE_SECRET_KEY}`, {
  apiVersion: "2022-08-01",
})

export const stripeConnect = async (code: string) => {
  try {
    const response = await client.oauth.token({
      code,
      grant_type: "authorization_code",
    })
    if (!response) {
      throw new Error("Failed to connect to stripe")
    }
    return response
  } catch (error) {
    console.log(error)
    throw new Error("Could not connect to stripe")
  }
}
