import { useState } from 'react'

import './App.css'

function App() {
  const [name, setName] = useState("Bhudda")

  return (
   <>
      <button onClick={(name) => setName((name) => "SHIV")}>{name}</button>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
   </>
  )
}

export default App
