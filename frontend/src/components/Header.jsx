import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useUserInfo from '../context/UserContext';
import { styles } from '../../style';

function Header() {
  // const [username, setUsername] = useState(null)
  const {userInfo, setUserInfo}  = useUserInfo()
  useEffect(()=>  {
    fetch("http://localhost:3333/profile", {
      credentials: "include"
    }).then(response => {
       response.json().then(userInfo => {
        //  setUsername(userInfo.username)
        setUserInfo(userInfo)
       })
    })
  }, []);

  function logout() {
     fetch("http://localhost:3333/logout", {
      credentials: "include", 
      method: "POST"
     }).then(response => {
        if(response.ok) {
          // setUsername(null)
          setUserInfo(null)
        }
     }).catch(err => {
       console.error("Unable to Logout", err.message)
     })
  }
   
  const username  = userInfo?.username

  return (
    <header className="flex justify-between m-8 text-black items-center ">
      <Link to={"/"} className="text-2xl font-bold">BlogVista</Link>
      <div className="flex justify-between gap-10 font-bold ">
       {username && (
        <> 
        <Link to={'/create'} className={`${styles.Btn} bg-gray-800 p-2 `}>Create Blog</Link>
        <a onClick={logout} className={`${styles.Btn} bg-gray-500 p-2`}>Logout</a>
        </>
       )}
       {!username && (
        <>
         <Link to={"/login"} className={`${styles.Btn} bg-gray-500 p-2`}>Login</Link>
        <Link to={"/signup"} className={`${styles.Btn} bg-gray-800 p-2 `}>Signup</Link>
        </>
       )}
       
      </div>
    </header>
  )
}

export default Header