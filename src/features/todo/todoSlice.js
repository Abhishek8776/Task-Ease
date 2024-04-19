import { createSlice, nanoid } from "@reduxjs/toolkit";


const todoSlice = createSlice({
  name: 'todo',
  initialState: { todos: [] },
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      }
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) =>
      todo.id !== action.payload)
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {...todo,text:action.payload.text}
        } else {
          return todo
        }
      })
    }
  }
});

export const { addTodo, removeTodo,editTodo } = todoSlice.actions
export default todoSlice.reducer;