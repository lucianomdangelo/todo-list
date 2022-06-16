import React from 'react'
import { useTasks } from '../../context/TaskContextProvider'

export default function Task({ id, task, complete }) {
  const { setStatusTask } = useTasks()
  const toogleTask = e => setStatusTask(id, e.target.checked) // TODO REVISAR EL e.target.checked

  return (
    <div className='task' >
      <input className="cb" type="checkbox" defaultChecked={complete}  onChange={toogleTask} />
      <span className={ complete ? 'task-done' : 'task-undone' }>{ task }</span>
    </div> 
  )
}