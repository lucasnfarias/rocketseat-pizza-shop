import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '@/api/get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'restaurant-id',
    name: 'Pizza Shop',
    description: 'Pizza shop description',
    managerId: 'manager-id',
    createdAt: new Date('2024-08-01'),
    updatedAt: null,
  })
})
