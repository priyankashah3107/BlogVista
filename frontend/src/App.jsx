import Header from './components/Header'
import Post from './components/Post'

function App() {

  return (
   <>
    <main className="h-full w-full bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100">
      <Header />
      <Post />
      <Post />
      <Post />
      <Post /> 
      <Post />
    </main>
   </>
  )
}

export default App
