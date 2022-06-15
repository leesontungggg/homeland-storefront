import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import * as React from "react"
import { Button, Card, Flex, Text } from "theme-ui"
import CodeSnippet from "../components/code-snippet"
import Layout from "../components/layout/layout"
import { client } from "../utils/client"
import Grid from '../components/utility/grid'

const IndexPage = ({ products }) => {
  const router = useRouter()

  return (
    <main>
      <Head>
        <title>Homeland Artists</title>
        <meta name="description" content="Homeland Artists is a platform to develop artists." />
      </Head>
      <Layout>
        <div className="bg-ui-light pb-12 lg:pb-0 w-full px-4 sm:px-6 lg:px-12 h-screen">
          <div className="flex flex-col lg:flex-row items-center justify-center max-w-screen-2xl mx-auto h-full">

            <div>
              <h1 className="text-4xl">Chúng mình đang phát triển hệ thống, mời bạn quay lại sau nhé!</h1>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  )
}

export async function getStaticProps({ params }) {
  const response = await client.products.list({ limit: 5 })

  return { props: { products: response.products } }
}

export default IndexPage
