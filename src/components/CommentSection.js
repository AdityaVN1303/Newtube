import React from 'react'
import Comment from './Comment'

const CommentSection = () => {
  return (
    <div className="comments mt-5">
      <p className='font-bold my-2'>1234 Comments</p>
      <div className="write">
        <input type="text" className='w-3/4 p-1 bg-transparent' />
        <button className='p-1 text-white bg-slate-500'>Comment</button>
      </div>
      <hr />
      {
        [...Array(10)].map(()=>{return <Comment/>})
      }
    </div>
  )
}

export default CommentSection