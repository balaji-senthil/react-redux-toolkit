import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {login, logout} from '../features/user'

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const dispatch = useDispatch()

  const handleLogin = () => {
    dispatch(login({userName: 'Balaji', age: 23, email: 'balaji.sen.ram@gmail.com'}))
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    dispatch(logout())
    setIsLoggedIn(false)
  }
  return (
    <div>
      <button
        disabled = {isLoggedIn}

        onClick={handleLogin}
      >
        Login 
      </button>
      <button
        disabled = {!isLoggedIn}
        onClick={handleLogout}
      >
        Logout
      </button>
      <br />
      <br />
    </div>
  )
}

export default Login
