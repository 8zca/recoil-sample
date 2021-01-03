import { NextPage } from 'next'
import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '@/state/todo/atoms'

const New: NextPage = () => {
  const [value, setValue] = useState('')
  const setTodoList = useSetRecoilState(todoListState)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
  const onClick = () => {

    if (value) {
      setTodoList((current) => {
        const size = current.length
        return [...current, { id: size + 1, text: value, isComplete: false }]
      })

      setValue('')
    }
  }

  return (
    <>
      <input type='text' onChange={onChange} value={value} />
      <button onClick={onClick}>追加</button>
    </>
  )
}

export default New
