import { http, HttpResponse } from 'msw'

import { GetMonthRevenueResponse } from '@/api/get-month-revenue'

export const getMonthRevenueMock = http.get<
  never,
  never,
  GetMonthRevenueResponse
>('/metrics/month-receipt', () => {
  return HttpResponse.json({
    receipt: 89000,
    diffFromLastMonth: -1,
  })
})
