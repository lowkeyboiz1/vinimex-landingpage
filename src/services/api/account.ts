import { instance } from './instance'

export const accountServices = {
  registerTrial: async (data: any) => await instance.post('/api/auth/register-trial', data)
}
