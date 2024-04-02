import React, { useEffect, useState } from 'react'
import Post from './Post'

function HomePosts() {
  const [posts, setPosts] = useState('')
  useEffect(() => {
    fetch("http://localhost:3333/post").then(response => {
       response.json().then(posts => {
        //  console.log(posts)
        setPosts(posts)
       })
    }) 
    .catch((err) => {
      console.log("Error fetching posts:", err)
    })
  }, [])
  return (
    <>
        {posts.length > 0 && posts.map(post => (
        <Post key={post._id} {...post} />
      ))}

     {/* <Post />
    <Post />
    <Post />
    <Post /> */}
    </>
   
  )
}

export default HomePosts