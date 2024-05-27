import { useState } from 'react'
interface Props {
  items: string[]
}
export function ListGroup(props: Props) {

  const [selectedIndex, setSelectedIndex] = useState(-1)
  const handleClick = (index: number) => {
    console.log('item was clicked')
    setSelectedIndex(index)
  }
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {!props.items.length && <p>Items not found</p>}
        {props.items.map((item, index) => (
          <li
            onClick={() => handleClick(index)}
            className={index === selectedIndex ? "list-group-item active" : "list-group-item"}>
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}