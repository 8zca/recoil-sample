import { NextPage } from 'next'
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil'
import { useRef } from 'react'
import { userListSelectorState, userSearchState } from '@/state/users'

const Users: NextPage = () => {
  const userList = useRecoilValueLoadable(userListSelectorState)
  const inputRef = useRef<HTMLInputElement>(null)
  const setSearchValue = useSetRecoilState(userSearchState)

  const onClick = () => {
    const value = inputRef.current?.value
    if (value) setSearchValue(value)
  }
  const makeContent = () => {
    switch(userList.state) {
      case 'loading':
        return <div>Loading..</div>
      case 'hasError':
        return <div>Error!!</div>
      case 'hasValue':
        if (userList.contents.length === 0) return <div>No results</div>
        return userList.contents.map((user) => <div key={user.id}>{user.name}</div>)
    }
  }

  return (
    <div>
      <input type='text' ref={inputRef} />
      <button onClick={onClick}>Search</button>
      {makeContent()}
    </div>
  )
}

export default Users
