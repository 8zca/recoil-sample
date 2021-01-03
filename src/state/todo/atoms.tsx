import { atom } from 'recoil'
import { TodoItemType, TodoListFilterType } from './types'


export const todoListState = atom<TodoItemType[]>({
  key: 'todoListState',
  default: []
})

export const todoListFilterState = atom<TodoListFilterType>({
  key: 'todoListFilterState',
  default: 'all'
})
