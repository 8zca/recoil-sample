export type TodoItemType = {
  id: number
  text: string
  isComplete: boolean
}

export type TodoListFilterType = 'all' | 'completed' | 'uncompleted'
