// import React from 'react';

// function Post({title, metaData, value, cover}) {
//   return (
//     <div className="post m-8 flex flex-col gap-5 text-start mt-20">
//       <div className="flex flex-col sm:flex-row gap-10">
//         <img src="ai.png" alt="image" className="w-full sm:w-1/2 rounded-lg md:w-1/2 lg:w-1/4  " />
//         <div className="content pl-4 sm:pl-0 pt-4 sm:pt-0 flex-grow">
//           <h2 className="font-bold text-4xl">When AI is your assistant</h2>
//           <div className="flex gap-3 mt-3">
//             <h5 className="font-bold">Priyanka</h5>
//             <p>3/30/2024</p>
//           </div>
//           <p className="mt-6 text-2xl">
//             In his book A Farewell to Alms, economist Gregory Clark posed a dramatic question: Can you name the type of employee whose job was the first to be affected by technology? The answer was simple: The horse.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Post;



import React from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
function Post({title, metaData, value, cover, createdAt, author, _id
}) {

  const postingDate = new Date()
  createdAt = format(postingDate, 'MMMM do, yyyy')
  // createdAt = format(postingDate, 'yyyy-MM-dd')
  return (
    <div className="post m-8 flex flex-col gap-5text-start mt-20">
      <div className="flex flex-col sm:flex-row gap-1">
        
        <div className=''>
         <Link to={`/post/${_id}`}>
         <img src={'http://localhost:3333/'+cover} alt="image" className="w-[750px] h-[200px] rounded-lg   " />

         </Link>
        </div>

        <div className=" pl-4 sm:pl-0 pt-4 sm:pt-0 flex flex-col ml-10 ">
          <Link to={`/post/${_id}`}>
          <h2 className="font-bold text-4xl">{title}</h2>
          </Link>
          
          <div className="flex gap-3 mt-3">
            <h5 className="font-bold">{author.username}</h5>
            <time>{createdAt}</time>
          </div>
          <p className="mt-6 text-xl">
           {metaData}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;
