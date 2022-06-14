import React, { useState } from "react"
import Banner from "./banner"
import NavBar from "./navbar"

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="sticky top-0 z-20">
      <header className="relative bg-white">
        <Banner />
        <NavBar />
      </header>
    </div>
  )
}

export default Header
