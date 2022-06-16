import React from 'react'
import Task from '../Task/index'
import { useTasks } from '../../context/TaskContextProvider.js'

export default function TaskList() {
  const { tasks } = useTasks()
  return (
    <div className='task-list'>
        {
          tasks.map((task, i) => 
            <Task key={i} {...task} />
          )
        }
    </div>
  )
}