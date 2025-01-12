import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {useForm} from "react-hook-form"

import {useDispatch} from "react-redux"


function App() {
  const {register,handleSubmit} = useForm()

  const dispatch = useDispatch()
  const loginHandler = async (userData)=>{
    // dispatch( reducer action )
    
  }



  return (
    <>
    <form onSubmit={handleSubmit(loginHandler)}>
      

    </form>
    
      
    </>
  )
}

export default App
