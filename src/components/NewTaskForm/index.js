import React, { useState } from 'react'
import { useTasks } from '../../context/TaskContextProvider'

export default function NewTaskForm() {
  const [task, setTask] = useState('')
  const { addTask, deleteCompletedTasks } = useTasks()

  const submit = e => {
    if (!task || /^\s*$/.test(task)){
      // TODO: display error
      setTask('');
      return;
    }
    addTask(task)
    setTask('')
  }

  return (
    <>
    <form onSubmit={submit} className="newtaskform">
      <input autoFocus className="add-new-task-input" type="text" value={task} placeholder="Get some eggs..." onChange={e => setTask(e.target.value)} required />
      <button className="add-new-task-button">Add</button>
    </form>
    
    <button className="delete-complete-task-button" onClick={deleteCompletedTasks}>Delete completed tasks</button>
    </>
  )
}