import React from "react"
import Navbar from "../Navbar"

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <header>
        <Navbar isAuthenticated={true} />
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
