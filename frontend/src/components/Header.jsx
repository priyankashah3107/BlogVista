import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [username, setUsername] = useState(null)
  useEffect(()=>  {
    fetch("http://localhost:3333/profile", {
      credentials: "include"
    }).then(response => {
       response.json().then(userInfo => {
         setUsername(userInfo.username)
       })
    })
  }, []);

  function logout() {
     fetch("http://localhost:3333/logout", {
      credentials: "include", 
      method: "POST"
     })
  }

  return (
    <header className="flex justify-between m-8 text-black items-center ">
      <Link to={"/"} className="text-2xl font-bold">BlogVista</Link>
      <div className="flex justify-between gap-10 font-bold ">
       {username && (
        <> 
        <Link to={'/create'}>Create Blog</Link>
        <a onClick={logout}>Logout</a>
        </>
       )}
       {!username && (
        <>
         <Link to={"/login"} >Login</Link>
        <Link to={"/signup"}>Signup</Link>
        </>
       )}
       
      </div>
    </header>
  )
}

export default Header