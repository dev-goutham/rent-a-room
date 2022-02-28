import Layout from "@frontend/components/Layout"
import AuthProvider from "@frontend/store/auth/context"
import type { AppProps } from "next/app"
import "tailwindcss/tailwind.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}

export default MyApp
