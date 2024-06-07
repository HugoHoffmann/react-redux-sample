import { useAppSelector } from './app/hooks'
import { Button } from './components/Button'
import { TodoList } from './components/TodoList'
function App() {
  const count = useAppSelector(state => state.count.value)
  return <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4'>
    <Button count={count} />
    <TodoList />
  </div >
}

export default App