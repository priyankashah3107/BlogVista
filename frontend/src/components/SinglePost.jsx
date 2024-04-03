// // SinglePost.jsx
// import React, { useEffect } from 'react';
// import { useState } from 'react';
// import { useParams } from 'react-router-dom';

// function SinglePost() {
//   const { postId } = useParams();
//    const [postInfo, setPostInfo] = useState()
//   useEffect(() => {
//     fetch(`http://localhost:3333/post/${postId}`)
//                         .then(response => {
//                           response.json().then(postInfo => {
//                               setPostInfo(postInfo)
//                           })
//                         })




//     // console.log(postId);
      

//   }, [postId]);

//   if(!postInfo) return '';

//   return (
//     <>
//        <h1>{postInfo.title}</h1>
//       <p>{postInfo.content}</p>
//     </>
//   )
// }

// export default SinglePost;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function SinglePost() {
  const { postId } = useParams();
  const [postInfo, setPostInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3333/post/${postId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }
        return response.json();
      })
      .then(postInfo => {
        setPostInfo(postInfo);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [postId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!postInfo) {
    return <div>No post found</div>;
  }

  return (
    <>
      <div>
        <img src="" alt="" />
      </div>
      <h1>{postInfo.title}</h1>
      <p>{postInfo.metaData}</p>
      <div>{postInfo.cover}</div>
      <p>{postInfo.value}</p>
      <p>{postInfo.author.username}</p>
      <time>{postInfo.createdAt}</time>
    </>
  );
}

export default SinglePost;
