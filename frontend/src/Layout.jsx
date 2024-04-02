// Layout.js
import React from 'react'
import { styles } from '../style.js'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <main className={``}>
      <Header />
      <Outlet />
    </main>
  )
}

export default Layout
