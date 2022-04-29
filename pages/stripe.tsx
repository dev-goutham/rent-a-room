import { useState } from "react"
import axios from "axios"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { Oval } from "react-loader-spinner"
import { Toaster, toast } from "react-hot-toast"

const Stripe: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true)

  const { query, push } = useRouter()

  useEffect(() => {
    const { code } = query as {
      code?: string
      error?: string
    }
    if (code) {
      axios
        .put("/api/user/stripe", {
          code,
        })
        .then((res) => {
          console.log(res)
          toast.success("Stripe connected succesfully")
          setIsLoading(false)
          push(`/`)
        })
        .catch(() => {
          toast.error("Something went wrong. Stripe could not connect")
          setIsLoading(false)
        })
    }
  }, [query])

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-6 -mt-12">
      <Toaster />
      {isLoading ? (
        <>
          <Oval
            ariaLabel="loading-indicator"
            height={100}
            width={100}
            strokeWidth={5}
            color="#003A6F"
            secondaryColor="#1890FF"
          />
          <h1 className="text-3xl font-bold text-blue-700">
            Connecting to stripe
          </h1>
        </>
      ) : null}
    </div>
  )
}

export default Stripe
