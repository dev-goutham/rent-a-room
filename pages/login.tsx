import useAuth from "@frontend/store/auth"
import { FormEventHandler, useEffect, useRef } from "react"
import { useRouter } from "next/router"
import { NextPage } from "next"
import { FcGoogle } from "react-icons/fc"

import Button from "@frontend/ui/Button"

const Login: NextPage = () => {
  const Router = useRouter()
  const { login, loginWithGoogle, isLoggedIn, error } = useAuth()
  const formRef = useRef<HTMLFormElement | null>(null)

  useEffect(() => {
    if (isLoggedIn) {
      Router.push("/")
    }
  }, [isLoggedIn])

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      email: { value: string }
      password: { value: string }
    }
    const email = target.email.value
    const password = target.password.value
    login(email, password)
  }

  return (
    <div className="flex items-center justify-center">
      <div className="px-12 py-6 bg-white shadow-md rounded-md border-[1px] border-slate-300">
        <form onSubmit={handleSubmit} ref={formRef}>
          <div className="mb-2">
            <label className="block text-sm font-semibold" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              className="block px-2 py-1 border-[1px] rounded-sm placeholder:text-slate-300 border-slate-300"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type={"password"}
              className="block px-2 py-1 border-[1px] rounded-sm placeholder:text-slate-300 border-slate-300"
              placeholder="password"
            />
          </div>
          {error && <div>{error}</div>}
          <Button variant="fill" fullSize>
            Submit
          </Button>
        </form>
        <div className="my-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-gray-500 bg-white">
                Or continue with
              </span>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={loginWithGoogle}
            className="px-6 py-2 flex gap-2 rounded-md border-[1px] border-slate-300"
          >
            <FcGoogle className="w-5 h-5 leading-none" />
            <span className="font-semibold">Login with Google</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
