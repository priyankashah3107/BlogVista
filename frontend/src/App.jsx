// App.js
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { styles } from '../style'
import Header from './components/Header'
import HomePosts from './components/HomePosts'
import Layout from './Layout'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePosts />} />
          <Route path="/login" element={<div><Login /></div>} />
          <Route path='/signup' element={<div><Signup /></div>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
