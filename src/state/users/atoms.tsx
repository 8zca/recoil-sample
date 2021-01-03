import { atom } from 'recoil'

export const userSearchState = atom<string>({
  key: 'userSearchState',
  default: ''
})
