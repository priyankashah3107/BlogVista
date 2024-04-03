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
function Post({title, metaData, value, cover, createdAt, author
}) {

  const postingDate = new Date()
  createdAt = format(postingDate, 'MMMM do, yyyy')
  // createdAt = format(postingDate, 'yyyy-MM-dd')
  return (
    <div className="post m-8 flex flex-col gap-5 text-start mt-20">
      <div className="flex flex-col sm:flex-row gap-10">
        <img src="ai.png" alt="image" className="w-full sm:w-1/2 rounded-lg md:w-1/2 lg:w-1/4  " />
        <div className="content pl-4 sm:pl-0 pt-4 sm:pt-0 flex-grow">
          <h2 className="font-bold text-4xl">{title}</h2>
          <div className="flex gap-3 mt-3">
            <h5 className="font-bold">{author.username}</h5>
            <time>{createdAt}</time>
          </div>
          <p className="mt-6 text-2xl">
           {metaData}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;
