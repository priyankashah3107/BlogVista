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


import React from 'react'

function Signup() {
  return (
    <div className="flex flex-row justify-center w-[550px] h-[400px] bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 absolute  left-[32%] top-[22%]">

      <form action="" className="flex flex-col gap-5 justify-center relative">
      <input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs" />
      <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
     
      <button className="btn btn-active btn-neutral">Signup</button>
      </form>
    </div>
  )
}

export default Signup