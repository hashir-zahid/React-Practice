import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: Date.now(),
                text: action.payload,
                completed: false
            })
        },

        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        toggleTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },


        clearTodo: (state) => {
            state.todos = []
        },
    }
})

export const { addTodo, deleteTodo, toggleTodo, clearTodo } = todoSlice.actions;
export default todoSlice.reducer;
