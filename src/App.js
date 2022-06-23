import React from 'react'
import './App.css'
import './styles/Todo.css'
import './styles/TasksList.css'
import './styles/NewTaskForm.css'
import NewTaskForm from './components/NewTaskForm'
import TaskList from './components/TaskList'

function App() {
  return (
    <div className="container">
      <h1 className="title">Todo List</h1>
      <div className='task-list-container'>
        <NewTaskForm />
        <TaskList />
      </div>
    </div>
  )
}

export default App