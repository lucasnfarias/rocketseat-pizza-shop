import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '@/api/get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { amount: 77, product: 'Pizza' },
    { amount: 54, product: 'Macarrão' },
    { amount: 24, product: 'Sushi' },
    { amount: 13, product: 'Espetinho' },
    { amount: 10, product: 'Batata frita' },
  ])
})
