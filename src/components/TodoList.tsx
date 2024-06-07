import { useEffect, useState } from 'react'
const URL = 'http://localhost:3000/todos'
export function TodoList() {
  const [list, setList] = useState<any[]>([])
  const [input, setInput] = useState("")

  useEffect(() => {
    const search = async () => {
      const promise = await fetch(URL)
      const result = await promise.json()
      setList(result)
    }
    search()
  }, [])
  const handleAdd = async () => {
    if (!input) return
    const promise = await fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        title: input,
        completed: false,
        createdAt: new Date()
      })
    })
    const result = await promise.json()
    setList(list => list.concat([result]))
  }
  const handleCheckbox = async (id: string, value: boolean) => {
    const promise = await fetch(URL + `/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ completed: value })
    })
    const result = await promise.json()
    const index = list.findIndex(item => item.id === id)
    const aux = [...list]
    aux[index] = result
    setList(aux)
  }

  const handleDelete = async (id: string) => {
    await fetch(URL + `/${id}`, {
      method: "DELETE"
    })
    setList(list => list.filter(item => item.id !== id))

  }
  return (
    <>
      <h1>List</h1>
      <div>
        <input type="text" required name="add" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
      </div>
      {!list.length ?? <p>Items not found</p>}
      <ul className="list-group">
        {list.map((item) => (
          <li key={item.id}>
            {item.title}
            <input type="checkbox" checked={item.completed} onChange={() => handleCheckbox(item.id, !item.completed)} />
            <button onClick={() => handleDelete(item.id)} >Remove</button>
          </li>
        ))}
      </ul>
    </>
  )
}