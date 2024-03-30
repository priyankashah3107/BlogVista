import React from 'react'
import { styles } from '../style'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
function Layout() {
  return (
   <>
      <main className={`${styles.mainBG}`}>
      <Header />
      <Outlet />
      </main>
   </>
  )
}

export default Layout