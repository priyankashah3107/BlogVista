import React, { useEffect } from 'react'
import Post from './Post'

function HomePosts() {
  useEffect(() => {
    fetch("http://localhost:3333/post").then(response => {
       response.json().then(posts => {
         console.log(posts)
       })
    })
  }, [])
  return (
    <>
     <Post />
    <Post />
    <Post />
    <Post />
    </>
   
  )
}

export default HomePosts