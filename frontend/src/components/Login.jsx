import React from 'react'

function Login() {
  return (
    <div className="flex flex-row justify-center mt-[200px]">

      <form action="" className="flex flex-col gap-5 justify-center relative">
      <input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs" />
      <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
     
      <button className="btn btn-active btn-neutral">SignUp</button>
      </form>
    </div>
  )
}

export default Login