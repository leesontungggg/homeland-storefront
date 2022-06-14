import { Card, Flex } from "@theme-ui/components"
import axios from "axios"
import { useOrder } from "medusa-react"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import OrderConfirmation from "../steps/order-confirmation"
import Layout from "./layout"

const BACKEND_URL =
  process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000"

const CompletedLayout = () => {
  const router = useRouter()

  const { order } = useOrder(router.query.oid)

  useEffect(() => {
    if (order) {
      const customerName =
        !order.customer.first_name || !order.customer.last_name
          ? `${order.shipping_address.first_name} ${order.shipping_address.last_name}`
          : `${order.customer.first_name} ${order.customer.last_name}`

      const item = order.items[0]

      const apiParams = {
        full_name: customerName,
        created_at: order.created_at,
        oid: order.id,
        isPaid: order.fulfillment_status !== 'not_fulfilled',
        total: order.total,
        email: order.email,
        phone: order.shipping_address.phone,
        eventTitle: item.title,
        amount: item.quantity
      }

      axios.get(`${BACKEND_URL}/store/confirm`, {
        params: apiParams
      }).catch(err => console.log(err))
    }
  }, [order])

  return (
    <Layout>
      {order && (
        <div className="min-w-screen min-h-screen flex flex-col items-center justify-center">
          <OrderConfirmation order={order} />
        </div>
      )}
    </Layout>
  )
}

export default CompletedLayout
