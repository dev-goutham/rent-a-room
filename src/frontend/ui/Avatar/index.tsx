import React, { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { BiUserCircle, BiLogOutCircle } from "react-icons/bi"
import Link from "next/link"
import useAuth from "@frontend/store/auth"

interface Props {
  imageUrl: string
  imageAlt: string
}

const Avatar: React.FC<Props> = ({ imageUrl, imageAlt }) => {
  const { logout, user } = useAuth()

  return (
    <Menu as="div" className="relative inline-block">
      <div>
        <Menu.Button>
          <img
            src={imageUrl}
            alt={imageAlt}
            className="inline-block object-cover w-8 h-8 rounded-full"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-50 w-auto origin-top-right bg-white border-2 divide-y rounded-lg shadow-lg border-slate-100 divide-slate-100">
          <Menu.Item>
            <Link href={`/user/${user!.id}`}>
              <a className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 ease-in rounded-t-lg hover:bg-slate-200 hover:text-slate-900 text-slate-700">
                <BiUserCircle />
                <div className="inline-block w-max">Profile</div>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <button
              onClick={logout}
              className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 ease-in rounded-b-lg hover:bg-slate-200 hover:text-slate-900 text-slate-700"
            >
              <BiLogOutCircle />
              <div className="inline-block w-max">Log Out</div>
            </button>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Avatar
