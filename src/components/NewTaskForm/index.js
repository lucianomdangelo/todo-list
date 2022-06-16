import React, { useState } from 'react'
import { useTasks } from '../../context/TaskContextProvider'

export default function NewTaskForm() {
  const [task, setTask] = useState('')
  const { addTask } = useTasks()

  const submit = e => {
    if (!task || /^\s*$/.test(task)){
      // TODO: display error
      setTask('');
      return;
    }
    e.preventDefault()
    addTask(task)
    setTask('')
  }

  return (
    <form onSubmit={submit} className="newtaskform">
      <input className="add-new-task-input" type="text" value={task} placeholder="Get some eggs..." onChange={e => setTask(e.target.value)} required />
      <button className="add-new-task-button">Add</button>
    </form>
  )
}