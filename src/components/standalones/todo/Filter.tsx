import { NextPage } from 'next'
import { useRecoilState } from 'recoil'
import { TodoListFilterType, todoListFilterState } from '@/state/todo'

const Filter: NextPage = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState)

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => setFilter(e.target.value as TodoListFilterType)

  return (
    <div>
      Filter:
      <select value={filter} onChange={onChange}>
        <option value='all'>All</option>
        <option value='completed'>Completed</option>
        <option value='uncompleted'>Uncompleted</option>
      </select>
    </div>
  )
}

export default Filter
