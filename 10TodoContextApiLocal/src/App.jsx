import { useState } from 'react'
import './App.css'
import { TodoProvider } from './context/todocontext'

function App() {
  const [todos, setTodo] = useState([])

  const addTodo = (todo) => {
    setTodo((prev)=>{
      setTodo(...prev,{id:Date.now(),...todo})
      }
    )
  }

  const updateTodo = (id, todo) =>{
    setTodo((prev)=>{
       prev.map((prevTodo)=>(prevTodo.id === id ? todo : prevTodo)          )
      }
    )
    
  }

  const deleteTodo = (id)=>{
    setTodo((prev)=> prev.filter((todo) => (todo.id !==id)))
  }

  const todoStatus = (id)=>{
     setTodo((prev)=>(prev.map((todo) => todo.id === id ? {...prev,todo} ) ) )
  }

  return (
    <TodoProvider value={{setTodo,deleteTodo,todoStatus,todos}}>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </TodoProvider>
  )
}

export default App
