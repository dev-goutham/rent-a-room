import { useEffect } from "react"
import { GetServerSideProps, NextPage } from "next"
import { useRouter } from "next/router"
import axios from "axios"
import { Toaster, toast } from "react-hot-toast"
import HostComponent from "@frontend/sections/Host"

interface Props {
  hasWallet: boolean
  userId: string
}

const Host: NextPage<Props> = ({ hasWallet, userId }) => {
  const { push } = useRouter()

  useEffect(() => {
    if (hasWallet) {
      return
    }
    toast.error("Please connect with stripe to list your house")
    const timeoutRef = setTimeout(() => {
      push(`user/${userId}`)
    }, 1500)
    return () => {
      clearTimeout(timeoutRef)
    }
  }, [hasWallet])

  return (
    <>
      <Toaster />
      <HostComponent />
    </>
  )
}

export default Host

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
}) => {
  const {
    data: { user },
  } = await axios.get<{ user: { id: string; walletId?: string } | null }>(
    `${process.env.NEXT_PUBLIC_WEB_URL}/api/auth/getMe`,
    {
      headers: {
        Cookie: req.headers.cookie || "",
      },
    },
  )

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        statusCode: 302,
      },
      props: {},
    }
  }

  return {
    props: {
      userId: user.id,
      hasWallet: Boolean(user.walletId),
    },
  }
}
