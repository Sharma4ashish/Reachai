import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1,text:"test1"}]
}


export const todoSlice = createSlice({
    name:'todo',
    // initialState:{
    //     todos:[{id:1,text:"example"}]},
    initialState,

    reducers:{
        addTodo:(state,action)=>{
            const todo= {
                id:nanoid(),
                text:action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            const id = action.payload
            state.todos = state.todos.filter((todo)=>todo.id !== id)
        },
        updateTodo:(state,action)=>{
            const id = action.payload;
            const updatedTodo = state.todos.map((todo)=>{ todo.id === id})
            state.todos.push(updatedTodo)

        }
    }
})

export const {updateTodo,removeTodo,addTodo} = todoSlice.actions

export default  todoSlice.reducer

// export const todoReducer =   todoSlice.reducer;