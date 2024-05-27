import { useAppDispatch } from '../app/hooks'
import { incremented } from '../feature/counter/counter-slice'

interface Props {
  count: number
}
export function Button({ count }: Props) {
  const dispatch = useAppDispatch()
  function handleClick() {
    dispatch(incremented())
  }
  return (
    <button className="btn btn-success" onClick={handleClick}>Count {count}</button>
  )
}