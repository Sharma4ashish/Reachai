import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider,useTodo } from './context'
import TodoForm from './components/TodoForm'

function App() {
  
  const [todos, setTodo] = useState([])

  
  useEffect(()=>{
    
    console.log(todos);
  
  // console.log(todos);
  
  
 },[todos])
  
  
  const addTodo = (todo) => {
    setTodo((prev)=>{return [...prev,{id:Date.now(),todo:todo}]}
     
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

  const isCompleteHandler = (id)=>{
    //  setTodo((prev)=>(prev.map((todo) => todo.id === id ? {...prev,todo} ) ) )
  }

  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,isCompleteHandler}}>
      <TodoForm/>
      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
      <button className=' bg-amber-300' onClick={addTodo}>dsfsdggsg</button>
    </TodoProvider>
  )
}

export default App
