import React, { useState } from 'react'
import { useTasks } from '../../context/TaskContextProvider'

export default function NewTaskForm() {
  const [task, setTask] = useState('')
  const { addTask } = useTasks()

  const submit = e => {
    /// TODO: validar que la task sea valida, que no sea vacia
    e.preventDefault()
    addTask(task)
    setTask('')
  }

  return (
    <form onSubmit={submit} className="newtaskform">
      <input type="text" value={task} placeholder="Get some eggs..." onChange={e => setTask(e.target.value)} required />
      <button className="add-new-task-button">Add</button>
    </form>
  )
}