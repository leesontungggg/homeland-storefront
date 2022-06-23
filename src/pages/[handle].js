import Head from "next/head"
import React, { useState } from "react"
import Layout from "../components/layout"
import Steps from "../components/steps"
import { client } from "../utils/client"

const ProductPage = ({ product, regions }) => {
  const quantity = product.variants[0].inventory_quantity
  const [region, setRegion] = useState(regions?.find(reg => reg.name === 'VN') || null)
  const [country, setCountry] = useState(region?.countries?.[0].iso_2 || "")

  const handleRegionChange = (regId, countryCode) => {
    const selected = regions.find(r => r.id === regId)
    setCountry(countryCode)
    setRegion(selected)
  }

  return (
    <>
      <Layout
        regions={regions}
        country={country}
        handleRegionChange={handleRegionChange}
      >
        <Head>
          <title>{product.title}</title>
          <meta name="description" content={product?.description || ""} />
        </Head>
        <div className="min-w-full min-h-screen flex flex-col items-center justify-center bg-ui-light pt-20">
          {
            quantity > 0 ? (
              <Steps
                product={product}
                regions={regions}
                region={region}
                country={country}
              />
            ) : (
              <div className="w-screen h-screen flex items-center justify-center -mt-20">
                <p className="text-2xl">Sự kiện {product.title} đã hết vé. Mong gặp lại bạn trong những sự kiện khác.</p>
              </div>
            )
          }

        </div>
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const { products } = await client.products.list()

  const paths = products
    .map(product => ({
      params: { handle: product.handle },
    }))
    .filter(p => !!p.params.handle)

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const response = await client.products.list({ handle: params.handle })
  const { regions } = await client.regions.list()

  // handles are unique, so we'll always only be fetching a single product
  const [product] = response.products

  // Pass post data to the page via props
  return { props: { product, regions } }
}

export default ProductPage
