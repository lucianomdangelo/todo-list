import React from 'react'
import { useTasks } from '../../context/TaskContextProvider'

export default function Task({ id, task, complete }) {
  const { setStatusTask, deleteTask } = useTasks()
  const toogleTask = e => setStatusTask(id, e.target.checked);

  return (
    <div className='task' >
      <button className="delete-task-button" onClick={f => deleteTask(id)}>X</button>
      <input className="cb" type="checkbox" defaultChecked={complete}  onChange={toogleTask} />
      <span className={ complete ? 'task-done' : 'task-undone' }>{ task }</span>
    </div> 
  )
}