import { setupWorker } from 'msw/browser'

import { getDailyRevenueInPeriodMock } from '@/api/mocks/get-daily-revenue-in-period.mock'
import { getDayOrdersAmountMock } from '@/api/mocks/get-day-orders-amount.mock'
import { getManagedRestaurantMock } from '@/api/mocks/get-managed-restaurant.mock'
import { getMonthCanceledOrdersAmountMock } from '@/api/mocks/get-month-canceled-orders-amount.mock'
import { getMonthOrdersAmountMock } from '@/api/mocks/get-month-orders-amount.mock'
import { getMonthRevenueMock } from '@/api/mocks/get-month-revenue.mock'
import { getOrderDetailsMock } from '@/api/mocks/get-order-details.mock'
import { getOrdersMock } from '@/api/mocks/get-orders.mock'
import { getPopularProductsMock } from '@/api/mocks/get-popular-products.mock'
import { getProfileMock } from '@/api/mocks/get-profile.mock'
import { registerRestaurantMock } from '@/api/mocks/register-restaurant.mock'
import { signInMock } from '@/api/mocks/sign-in.mock'
import { updateProfileMock } from '@/api/mocks/update-profile.mock'
import { env } from '@/env'

const handlers = [
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
  getOrdersMock,
  getOrderDetailsMock,
]

export const worker = setupWorker(...handlers)

export async function enableMSW() {
  if (env.MODE !== 'test') return

  await worker.start()
}
