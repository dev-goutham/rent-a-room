import Layout from "@frontend/components/Layout"
import AuthProvider from "@frontend/store/auth/context"
import type { AppProps } from "next/app"
import "tailwindcss/tailwind.css"
import NextNProgress from "nextjs-progressbar"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Elements stripe={stripePromise}>
        <NextNProgress color="#1890FF" height={6} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Elements>
    </AuthProvider>
  )
}

export default MyApp
