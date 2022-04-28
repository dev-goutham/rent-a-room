import Layout from "@frontend/components/Layout"
import AuthProvider from "@frontend/store/auth/context"
import type { AppProps } from "next/app"
import "tailwindcss/tailwind.css"
import NextNProgress from "nextjs-progressbar"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <NextNProgress color="#1890FF" height={6} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}

export default MyApp
