import { NextPage } from 'next'
import { useRecoilValue } from 'recoil'
import { filteredTodoListState } from '@/state/todo'
import New from './New'
import Item from './Item'
import Filter from './Filter'

const Todo: NextPage = () => {
  // const todoList = useRecoilValue(todoListState)
  const todoList = useRecoilValue(filteredTodoListState)

  return (    
    <>
      <Filter />
      <New />
      {todoList.map((todo) => <Item key={todo.id} item={todo} />)}
    </>
  )
}

export default Todo
