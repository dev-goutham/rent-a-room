import React from "react"
import { AiFillHome } from "react-icons/ai"

import Logo from "@frontend/ui/Logo"
import SearchBar from "@frontend/ui/SearchBar"
import Button from "@frontend/ui/Button"
import IconButton from "@frontend/ui/IconButton"
import Avatar from "@frontend/ui/Avatar"
import Container from "@frontend/ui/Container"
import Link from "next/link"

interface Props {
  isAuthenticated: boolean
}

const Navbar: React.FC<Props> = ({ isAuthenticated }) => {
  //TODO
  const imageUrl =
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto:compress&cs=tinysrgb&dpr=2&h=650&w=940"
  const imageAlt = "image"

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
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <IconButton variant="fill" Icon={AiFillHome}>
                  Host
                </IconButton>
                <Avatar imageUrl={imageUrl} imageAlt={imageAlt} />
              </>
            ) : (
              <>
                <Button variant="fill">Login</Button>
                <Button variant="outline">Register</Button>
              </>
            )}
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
