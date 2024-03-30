// Layout.js
import React from 'react'
import { styles } from '../style.js'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <main className={`h-screen w-full bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100`}>
      <Header />
      <Outlet />
    </main>
  )
}

export default Layout
