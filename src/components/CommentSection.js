import React, { useEffect, useState } from 'react'
import Comment from './Comment'
import axios from 'axios'
import {YT_API_KEY, YT_COMMENT_URL} from '../utils/constants'

const CommentSection = ({id}) => {

  const [comment, setComment] = useState([]);

  useEffect(() => {
    const getComments = async ()=>{
      try {
        const comments = await axios.get(YT_COMMENT_URL , {
          params : {
            part : 'snippet',
            videoId : id,
            maxResults : 55,
            key : YT_API_KEY
          }
        })
        console.log(comments);
        setComment(comments.data.items);
      } catch (error) {
        console.log(error);
      }
    }
    getComments();
  }, [id])
  

  return (
    <div className="comments mt-5">
      <p className='font-bold my-2'>TOP 50 Comments</p>
      <div className="write">
        <input type="text" className='w-3/4 p-1 bg-transparent' />
        <button className='p-1 text-white bg-slate-500'>Comment</button>
      </div>
      <hr />
      {
        comment && comment.map((item)=>{
          return <Comment data={item.snippet.topLevelComment.snippet}/>
        })
      }
    </div>
  )
}

export default CommentSection