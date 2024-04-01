import React, { useState } from 'react'
import {Navigate} from "react-router-dom"
import useUserInfo from '../context/UserContext';
function Login() {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('')
   const [redirect, setRedirect] = useState(false)
     const {userInfo, setUserInfo}  =    useUserInfo()
   async function login(ev) {
    ev.preventDefault();
    try {
      const response = await fetch("http://localhost:3333/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
        credentials: "include"
      });
      // if (response.status === 200) {
      //    alert("successfully Login")
        
      // } 
      if(response.ok) {
         response.json().then(userInfomation => {
          setUserInfo(userInfomation)
          setRedirect(true)
         })
        
      }
      else {
        alert("Wrong Credentials ")
      }
    } catch (error) {
      console.error("Error:", error.message); // Log any errors that occur during login
    }
  }
  
  if(redirect) {
    return <Navigate  to={'/'}/>
  }

  return (
    <div className="flex flex-row justify-center mt-[200px]">

      <form action="" className="flex flex-col gap-5 justify-center relative" onSubmit={login}>
      <input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs"
       value={username}
       onChange={(ev) => setUsername(ev.target.value)}
      />
      <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" 
       value={password}
       onChange={(ev) => setPassword(ev.target.value)}
      />
     
      <button className="btn btn-active btn-neutral">Login</button>
      </form>
    </div>
  )
}

export default Login