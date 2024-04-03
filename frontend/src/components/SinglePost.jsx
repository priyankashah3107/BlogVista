

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import useUserInfo, { UserContext } from '../context/UserContext';
import { useContext } from 'react';
function SinglePost({createdAt}) {
  const { postId } = useParams();
  const [postInfo, setPostInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {userInfo, setUserInfo} = useUserInfo()
  const postingDate = new Date()
  createdAt = format(postingDate, 'MMMM do, yyyy')

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
 

<div className="post m-8 flex flex-col gap-5text-start mt-20">
      <div className="flex flex-col sm:flex-row gap-1 ">

    <div className=" pl-4 sm:pl-0 pt-4 sm:pt-0 flex flex-col ml-10 text-center">
         <h2 className="font-bold text-4xl">{postInfo.title}</h2>
          
          <div className="flex gap-3 mt-3 text-center justify-center flex-col-reverse">
            <h5 className="font-bold">By @{postInfo.author.username}</h5>
            <time className='text-gray-500'>{createdAt}</time>
          </div>
          { userInfo.id === postInfo.author._id && (

            <div className='h-14 w-36 bg-black text-white  rounded-md text-center flex items-center justify-center p-4 gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>

              <a href="/edit" className='text-center'>Edit post</a>
            </div>
          ) }
          <p className="mt-6 text-xl text-left">
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
