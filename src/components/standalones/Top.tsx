import { NextPage } from 'next'
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'

const state = atom({
  key: 'topInputText',
  default: ''
})

const countState = selector({
  key: 'topCountState',
  get: ({ get }) => {
    const text = get(state)
    return text.length
  }
})

const Top: NextPage = () => {
  const [value, setValue] = useRecoilState(state)
  const count = useRecoilValue(countState)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <input type='text' onChange={onChange} />
      <p>text={value}, length={count}</p>
    </div>
  )
}

export default Top
