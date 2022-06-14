import { Flex, Link, Text } from "@theme-ui/components"
import Image from "next/image"
import React from "react"
import RegionSelector from "../region-selector/region-selector"
import NavBar from "../header/navbar"

const Layout = ({ children, country, regions, handleRegionChange }) => {
  return (
    <>
      <NavBar />
      <div className="w-full min-h-screen">
        {children}
      </div>
    </>

  )
}

export default Layout
