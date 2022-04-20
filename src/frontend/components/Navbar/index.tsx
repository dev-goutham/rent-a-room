import React from "react"
import { AiFillHome } from "react-icons/ai"

import Logo from "@frontend/ui/Logo"
import Button from "@frontend/ui/Button"
import IconButton from "@frontend/ui/IconButton"
import Avatar from "@frontend/ui/Avatar"
import Container from "@frontend/ui/Container"
import Link from "next/link"
import useAuth from "@frontend/store/auth"

const Navbar: React.FC = () => {
  const { isLoggedIn, user, fetchingUser } = useAuth()

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-white shadow-md">
      <Container>
        <div className="flex justify-between w-full py-3 align-middle">
          <div className="flex items-center gap-4 align-middle lg:flex-1">
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </div>
          {!fetchingUser && (
            <div className="flex items-center gap-4">
              {isLoggedIn && user ? (
                <>
                  <Link href="/host">
                    <a>
                      <IconButton variant="fill" Icon={AiFillHome}>
                        Host
                      </IconButton>
                    </a>
                  </Link>
                  <Avatar imageUrl={user.image} imageAlt={user.name} />
                </>
              ) : (
                <>
                  <Link href="/login">
                    <a>
                      <Button variant="fill">Login</Button>
                    </a>
                  </Link>
                  <Link href="/register">
                    <a>
                      <Button variant="outline">Register</Button>
                    </a>
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
