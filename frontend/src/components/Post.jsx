import React from 'react'

function Post() {
  return (
    <div className='m-8 flex gap-5 text-start mt-20'>
       <div>
        <img src="ai.png" alt="image"  />
       </div>

       <div>
        <h2 className="font-bold text-4xl">When AI is your assistant</h2>
        <div className="flex gap-3 mt-3">
          <h5 className='font-bold'>Priyanka</h5>
          <p>3/30/2024</p>
        </div>
         <p className="mt-6 text-2xl">
         In his book A Farewell to Alms, economist Gregory Clark posed a dramatic question: Can you name the type of employee whose job was the first to be affected by technology? The answer was simple: The horse.
         </p>
       </div>
    </div>
  )
}

export default Post