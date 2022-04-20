import { GetServerSideProps, NextPage } from "next"
import axios from "axios"
import HostComponent from "@frontend/sections/Host"

const Host: NextPage = () => {
  return <HostComponent />
}

export default Host

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const {
    data: { user },
  } = await axios.get<{ user: { id: string } | null }>(
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
    props: {},
  }
}
