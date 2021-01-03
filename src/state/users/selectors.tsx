import { selector } from 'recoil'
import { userSearchState } from './atoms'
import { UserType } from './types'

export const userListSelectorState = selector<UserType[]>({
  key: 'userListSelectorState',
  get: async ({ get }) => {
    const search = get(userSearchState)
    if (!search) return []

    const res = await fetch(`/api/users?q=${search}`)
    return res.json()
  }
})
