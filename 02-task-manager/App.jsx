import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (input.trim() !== "") {
      const newTask = { id: Date.now(), name: input, completed: false };
      setTasks([...tasks, newTask]);
      setInput("");
    }
  }

  const toggleComplete = (id) => {
    const updateTask = tasks.map((task) => (task.id === id) ? { ...task, completed: !task.completed } : task)
    setTasks(updateTask);
  }

  const deleteTask = (id) => {
    const updateTask = tasks.filter((task) => task.id !== id);
    setTasks(updateTask);
  }

  return (
    <div className='container'>

      <input className='input-task' type="text" placeholder='Enter a task' value={input} onChange={(e) => { setInput(e.target.value) }} />
      <button className='btn-add' onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input className='checkbox' type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id)} />

            <span className='display-task' style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.name}</span>
            <button className='btn-delete' onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App