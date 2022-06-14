import React from "react"
import Helmet from "react-helmet"

const SEO = ({ title }) => {
  return (
    <Helmet
      title={title || "Homeland Artists"}
      // configure your own metadata data here
      // e.g.:
      //   [
      //     {
      //       name: `description`,
      //       content: "Medusa T-shirt in Navy",
      //     },
      //     {
      //       property: `og:title`,
      //       content: Medusa T-shirt,
      //     },
      //   ]
      meta={[]}
    />
  )
}

export default SEO
