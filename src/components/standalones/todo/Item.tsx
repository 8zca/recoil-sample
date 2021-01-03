import { NextPage } from 'next'
import { useRecoilState } from 'recoil'
import { TodoItemType, todoListState } from '@/state/todo'

type Props = {
  item: TodoItemType
}

const Item: NextPage<Props> = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newList = todoList.map((row) => {
      if (row.id === item.id) row.text = e.target.value
      return row
    })
    setTodoList(newList)
  }

  const onChangeToggle = () => {
    const newList = todoList.map((row) => {
      if (row.id === item.id) {
        return { ...row, isComplete: !item.isComplete }
      }
      return row
    })
    setTodoList(newList)
  }

  const onClick = () => {
    const newList = todoList.filter((row) => row.id !== item.id)
    setTodoList(newList)
  }

  return (
    <div>
      <input type='text' value={item.text} onChange={onChangeText} />
      <input
        type='checkbox'
        checked={item.isComplete}
        onChange={onChangeToggle}
      />
      <button onClick={onClick}>&times;</button>
    </div>
  )
}

export default Item
