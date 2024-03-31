// App.js
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { styles } from '../style.js'
import Header from './components/Header'
import HomePosts from './components/HomePosts'
import Layout from './Layout'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePosts />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
