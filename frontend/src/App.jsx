import { styles } from '../style'
import Header from './components/Header'
import Post from './components/Post'

function App() {

  return (
   <>
    <main className={`${styles.mainBG}`}>
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
