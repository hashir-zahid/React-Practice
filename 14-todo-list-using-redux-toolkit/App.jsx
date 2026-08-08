import React, { useState } from 'react'
import Header from './components/Header'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo, toggleTodo } from './context/todoSlice'

function App() {
    const [text, setText] = useState('')

    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos.todos)

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <Header />

            <div className="max-w-xl mx-auto mt-6 flex gap-3">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter a new task..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                    onClick={() => {
                        if (text.trim() !== '') {
                            dispatch(addTodo(text))
                            setText('')
                        }
                    }}
                    className="px-5 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition cursor-pointer"
                >
                    + Add
                </button>
            </div>

            <ul className="max-w-xl mx-auto mt-6 space-y-3">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex items-center justify-between bg-white px-4 py-3 rounded-lg shadow hover:bg-gray-50 transition"
                    >
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => dispatch(toggleTodo(todo.id))}
                                className="w-5 h-5 accent-indigo-600 cursor-pointer focus:ring-2 focus:ring-indigo-500"
                            />
                            <p className={`select-none ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                                {todo.text}
                            </p>
                        </div>
                        <button
                            onClick={() => dispatch(deleteTodo(todo.id))}
                            className="text-red-600 font-semibold hover:text-red-800 transition cursor-pointer"
                        >
                            DELETE
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App
