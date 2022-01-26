import Layout from "@frontend/components/Layout"
import type { AppProps } from "next/app"
import "tailwindcss/tailwind.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
