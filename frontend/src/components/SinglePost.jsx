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
      {/* <div>
        <img src={`http://localhost:3333/${postInfo.cover}`} alt="img" 
          className="w-[750px] h-[200px] rounded-lg"/>
      </div>
      <h1>{postInfo.title}</h1>
      <p>{postInfo.metaData}</p>
      <div>{postInfo.cover}</div>
      <p>{postInfo.value}</p>
      <p>{postInfo.author.username}</p>
      <time>{postInfo.createdAt}</time> */}

<div className="post m-8 flex flex-col gap-5text-start mt-20">
      <div className="flex flex-col sm:flex-row gap-1 ">

    <div className=" pl-4 sm:pl-0 pt-4 sm:pt-0 flex flex-col ml-10 text-center">
         <h2 className="font-bold text-4xl">{postInfo.title}</h2>
          
          <div className="flex gap-3 mt-3 text-center justify-center flex-col-reverse">
            <h5 className="font-bold">By @{postInfo.author.username}</h5>
            <time className='text-gray-500'>{postInfo.createdAt}</time>
          </div>
          <p className="mt-6 text-xl">
           { postInfo.metaData}
           
        <div className='items-center flex justify-center m-6' >
         <img src={`http://localhost:3333/${postInfo.cover}`} alt="image" className="w-[560px] h-[420px] rounded-lg  " />
         </div>
           
          </p>
            
            <div className='text-start'>
            <div dangerouslySetInnerHTML={{ __html: postInfo.value }} />

            </div>

        </div>

      </div> 
      </div>
    </>
  );
}

export default SinglePost;
