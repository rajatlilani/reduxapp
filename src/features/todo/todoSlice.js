import { createSlice, nanoid } from '@reduxjs/toolkit'

// const initialState = {
//     todos: [],
// }

// export const todoSlice = createSlice({
//     name: 'todo',
//     initialState,
//     reducers: {

//         addTodo: (state, action) => {
//             const todo = {
//                 // id: nanoid(),
//                 text: action.payload,
//             }
//             state.todos.push(todo)
//             localStorage.setItem('localTodos', state)
//         },
//         removeTodo: (state, action) => {
//             state.todos = state.todos.filter((todo) => todo.id !== action.payload)
//         }
//     }
// })





const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
            localStorage.setItem('todos', JSON.stringify(state));
        },
        deleteTodo: (state, action) => {
            const indexToDelete = state.findIndex((todo) => todo === action.payload);
            if (indexToDelete !== -1) {
                state.splice(indexToDelete, 1);
                localStorage.setItem('todos', JSON.stringify(state));
            }
        },
    },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

// export const { addTodo, removeTodo } = todoSlice.actions
// export default todoSlice.reducer