import React, { useState } from 'react'

function Login() {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('')
 
   async function login(ev) {
    ev.preventDefault();
   await fetch("http://localhost:3003/login", {
      method: "POST",
      body: JSON.stringify({username, password}),
      headers: {"Content-Type": "application/json"}
    })
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