import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'


function AddTodo() {
  const [input, setinput] = useState('')
  const dispatch = useDispatch()

  const handleAddTodo = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    // console.log(input);
    
    setinput('')
    
  }
  
  return (
    <>
    <div>AddTodo</div>
    <input className='bg-slate-300' value={input} onChange={(e)=>setinput(e.target.value)} type='text'></input>
    <button type='submit' className=' bg-slate-600' onClick={handleAddTodo}>AddTodo</button>
   
    </>
  )
}

export default AddTodo