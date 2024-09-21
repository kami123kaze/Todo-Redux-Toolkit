import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),   // Unique ID for each new todo
                text: action.payload
            };
            state.todos.push(todo);   // Add the new todo to the array
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            state.todos = state.todos.map((todo) => 
                todo.id === id ? { ...todo, text: text } : todo
            );
        }
    }
});

// Export the actions
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

// Export the reducer to use in the store
export default todoSlice.reducer;
