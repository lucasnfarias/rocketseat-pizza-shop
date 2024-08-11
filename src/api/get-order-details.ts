import { api } from '@/lib/axios'
import { OrderStatus } from '@/pages/app/orders/order-status'

interface GetOrderDetailsParams {
  orderId: string
}

export interface GetOrderDetailsResponse {
  id: string
  createdAt: string
  status: OrderStatus
  totalInCents: number
  customer: {
    name: string
    email: string
    phone: string | null
  }
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}

export async function getOrderDetails({ orderId }: GetOrderDetailsParams) {
  const { data } = await api.get<GetOrderDetailsResponse>(`/orders/${orderId}`)

  return data
}
