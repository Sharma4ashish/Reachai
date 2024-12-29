import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <p>
        Counter : {count}
      </p>
      <button className=' m-1' onClick={()=> setCount(count+1)}> Add Value</button>
      <button onClick={()=> setCount(count-1)}> Sub Value</button>
    </>
  )
}

export default App
