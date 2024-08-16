import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '@/api/get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '234234234',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 9000,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 4000,
        product: {
          name: 'Pizza',
        },
        quantity: 2,
      },
      {
        id: 'order-item-2',
        priceInCents: 1000,
        product: {
          name: 'Coca',
        },
        quantity: 1,
      },
    ],
  })
})
