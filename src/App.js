// 1
import React from 'react'
import './App.css'
import './styles/Todo.css'
import NewTaskForm from './components/NewTaskForm'
import TaskList from './components/TaskList'

function App() {
  // 2
  return (
    <div className="container">
      <h1 className="title">Todo List</h1>
      <TaskList />
      <NewTaskForm />
    </div>
  )
}

export default App

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
