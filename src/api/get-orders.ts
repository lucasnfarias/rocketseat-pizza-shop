import { api } from '@/lib/axios'

export interface Order {
  orderId: string
  createdAt: string
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  customerName: string
  total: number
}

export interface GetOrdersQuery {
  pageIndex?: number | null
}

export interface GetOrdersResponse {
  orders: Order[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getOrders({ pageIndex }: GetOrdersQuery) {
  const { data } = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex,
    },
  })

  return data
}
