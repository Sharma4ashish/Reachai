import { useContext,useState } from 'react'
import {UserContext} from '../context/UserContext'

function Login() {

  const [username, setusername] = useState("")
  const [password, setPassword] = useState("")

  const {settext} = useContext(UserContext)
 
  const handleSubmit = (e) => {
    e.preventDefault()

    settext({username,password})
    setusername("")
    setPassword("")

  }
 
  return (
    <>
      <div>
        <h2>Login</h2>
        <input 
        type="text"
        value={username}
        onChange={(e)=>setusername(e.target.value)}
        placeholder="username" />
        
        <input 
        type="text" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder="Password"/>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>  
  )
}

export default Login