import React, {createContext, useState, useContext, useEffect} from 'react'
import { v4 } from "uuid"


const TaskContext = createContext()
export const useTasks = () => useContext(TaskContext)

export default function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('todo-list')) || []);

  useEffect(() => {
    localStorage.setItem('todo-list', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = task => {
      setTasks([
          ...tasks,
          {
              id: v4(),
              task,
              complete: false
          }
      ])
    };

    const deleteCompletedTasks = () => {
        setTasks([...tasks.filter( t => !t.complete )]);
    };

    const deleteTask = (id) => {
        setTasks([...tasks.filter( t => t.id !== id )]);
    };

    const setStatusTask = (id, status) => {
        setTasks([...tasks.map(t => t.id === id ? {...t, complete: status} : t)])
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, setStatusTask, deleteCompletedTasks, deleteTask }}>
            { children }
        </TaskContext.Provider>
    )
}