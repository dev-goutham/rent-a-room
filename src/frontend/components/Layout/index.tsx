import Container from "@frontend/ui/Container"
import React from "react"
import Navbar from "../Navbar"

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <header className="relative mb-20">
        <Navbar isAuthenticated={true} />
      </header>
      <main className="mb-20">
        <Container>{children}</Container>
      </main>
    </div>
  )
}

export default Layout
