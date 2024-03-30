import React from 'react'

function Header() {
  return (
    <header className="flex justify-between m-8 text-black items-center ">
      <div className="text-2xl font-bold">BlogVista</div>
      <div className="flex justify-between gap-4 font-bold ">
        <a href="" >Login</a>
        <a href="">Signup</a>
      </div>
    </header>
  )
}

export default Header