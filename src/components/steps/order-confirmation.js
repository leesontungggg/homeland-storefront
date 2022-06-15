import { Flex, Text } from "@theme-ui/components"
import moment from "moment"
import React from "react"

const OrderConfirmation = ({ order }) => {
  const customerName =
    !order.customer.first_name || !order.customer.last_name
      ? `${order.shipping_address.first_name} ${order.shipping_address.last_name}`
      : `${order.customer.first_name} ${order.customer.last_name}`

  return (
    <Flex
      sx={{
        flexDirection: "column",
      }}
    >
      <Flex
        mt={3}
        pb={3}
        sx={{
          fontSize: "24px",
          borderBottom: "1px solid #E5E7EB",
          flexDirection: "column",
          fontWeight: "500",
        }}
      >
        <Flex sx={{ lineHeight: "36px" }}>
          Cám ơn, {customerName}! <br />
          Đã tham gia cùng tụi mình.
        </Flex>
        <Text variant="summary" sx={{ mt: "8px" }}>
          Bạn đã đặt vé thành công. Bạn hãy kiểm tra email để thực hiện thanh toán nhé.
        </Text>
      </Flex>
      <Flex my={3} pb={3} sx={{ flex: 1 }}>
        <Flex
          sx={{
            flex: 1,
            flexDirection: "column",
          }}
        >
          <Flex sx={{ mb: "8px" }}>
            <Text variant="summary" sx={{ mr: "5px" }}>
              Mã đặt chỗ:
            </Text>
            <Text variant="summary" sx={{ color: "#111827" }}>
              {order.id}
            </Text>
          </Flex>
          <Flex sx={{ mb: "8px" }}>
            <Text variant="summary" sx={{ mr: "5px" }}>
              Ngày:
            </Text>
            <Text variant="summary" sx={{ color: "#111827" }}>
              {moment(order.created_at).format("LLLL")}
            </Text>
          </Flex>
          <Flex sx={{ mb: "24px" }}>
            <Text variant="summary" sx={{ mr: "5px" }}>
              Chúng mình đã gửi xác nhận đặt chỗ đến{" "}
              <span style={{ color: "#111827", fontWeight: 500 }}>
                {order.email}
              </span>
              Các bạn vui lòng thanh toán trong vòng 1 ngày sau khi đặt chỗ nhé.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default OrderConfirmation
