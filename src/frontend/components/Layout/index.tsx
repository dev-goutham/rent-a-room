import React from "react"
import Navbar from "../Navbar"

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <header className="relative mb-12">
        <Navbar isAuthenticated={true} />
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
