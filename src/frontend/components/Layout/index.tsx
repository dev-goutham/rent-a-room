import Container from "@frontend/ui/Container"
import React from "react"
import Navbar from "../Navbar"

const Layout: React.FC = ({ children }) => {
  return (
    <div className="text-slate-600">
      <header className="relative mb-20">
        <Navbar />
      </header>
      <main className="relative mb-20">
        <Container>{children}</Container>
      </main>
    </div>
  )
}

export default Layout
