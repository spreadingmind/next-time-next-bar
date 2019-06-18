import apiClient from './Api'

export const fetchBars = async () => {
  return apiClient().get('bars')
}
