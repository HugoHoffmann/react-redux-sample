import { useAppSelector } from './app/hooks'
import { Button } from './components/Button'
function App() {
  const count = useAppSelector(state => state.count.value)
  return <>
    <div className='d-flex justify-content-center'>
      <Button count={count} />
    </div >
  </>
}

export default App