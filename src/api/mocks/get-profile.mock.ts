import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '@/api/get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'manager-id',
      name: 'Jorginho da Abin',
      email: 'johndoe@example.com',
      phone: '9999-9999',
      role: 'manager',
      createdAt: new Date('2024-08-01'),
      updatedAt: null,
    })
  },
)
