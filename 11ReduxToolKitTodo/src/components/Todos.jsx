import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state=>state.todos)
    const dispatch = useDispatch()

    const updateTodo =  (id) =>{

      const todo = todos.map((todo)=>{todo.id === id})
      
      dispatch(updateTodo(id))
    }



  return (
    <>
    <h1>Todos</h1>
    {todos.map((todo)=>(
      <li key={todo.id}>{todo.text}
      <button className=' bg-red-400' onClick={()=> dispatch(removeTodo(todo.id))  }>X</button>
      <button className=' bg-green-400' type='submit' onClick={()=>updateTodo(todo.id)}>Update Todo</button>
      </li>
    ))}
    </>
  )
}

export default Todos