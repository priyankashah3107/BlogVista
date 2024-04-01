import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  useEffect(()=>  {
    fetch("http://localhost:3333/profile", {
      credentials: "include"
    });
  }, []);

  return (
    <header className="flex justify-between m-8 text-black items-center ">
      <Link to={"/"} className="text-2xl font-bold">BlogVista</Link>
      <div className="flex justify-between gap-10 font-bold ">
        <Link to={"/login"} >Login</Link>
        <Link to={"/signup"}>Signup</Link>
      </div>
    </header>
  )
}

export default Header