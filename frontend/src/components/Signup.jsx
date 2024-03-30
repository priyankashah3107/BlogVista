// import React from 'react'

// function Signup() {
//   return (
//     <div className="flex flex-row justify-center mt-[200px]">

//       <form action="" className="flex flex-col gap-5 justify-center relative">
//       <input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs" />
//       <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
     
//       <button className="btn btn-active btn-neutral">SignUp</button>
//       </form>
//     </div>
//   )
// }

// export default Signup


import React, { useState } from 'react'


async function register(ev) {
  ev.preventDefault();
  
 await fetch("http://localhost:3333/")
  
}

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(ev) {
    ev.preventDefault();
    
   await fetch("http://localhost:3333/signup", {
    method: "POST",
    body: JSON.stringify({username, password}),
    headers: {"Content-Type": "application/json"}
   })
    
  }

  return (
    <div className="flex flex-row justify-center w-[550px] h-[400px] bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 absolute  left-[32%] top-[22%]">

      <form action="" 
         onSubmit={register}
      className="flex flex-col gap-5 justify-center relative"
       >

      <input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs" 
      value={username}
      onChange={(ev) => setUsername(ev.target.value)}
      />
      <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs"
       value={password}
       onChange={(ev) => setPassword(ev.target.value)}
      />
     
      <button className="btn btn-active btn-neutral">Signup</button>
      </form>
    </div>
  )
}

export default Signup