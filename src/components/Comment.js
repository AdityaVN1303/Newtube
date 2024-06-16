import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Comment = () => {
  return (
    <div className="comment">
      <div className="comment flex justify-start items-center space-x-2 my-2">
          <LazyLoadImage alt='img-banner' src="https://i.pinimg.com/736x/af/62/e3/af62e39726f946b578b8a8dff0f5220b.jpg" className='w-10 h-10 object-cover rounded-full'  />
          <div className="channelInfo text-sm">
          <div className="user-info space-x-2 flex justify-center items-center">
          <p className=''>Mr Beast</p>
          <p className='flex items-center'><GoDotFill/> <span>8 months ago</span></p>
          </div>
          <p className='text-base'>Nice Video Dude !!!</p>
          </div>
        </div>
        <hr />
    </div>
  )
}

export default Comment