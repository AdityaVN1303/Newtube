import React from 'react'
import { IoEyeSharp } from 'react-icons/io5'
import { GoDotFill } from 'react-icons/go'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { AiFillDislike, AiFillLike } from 'react-icons/ai'

const Metadata = () => {

  const showMore = ()=>{

  }

  return (
    <div className="meta mt-5 space-y-1">
      <div className="up">
        <h1 className='font-semibold text-xl mb-2'>Video Title</h1>
        <div className="video-info flex justify-between items-center">
        <div className="info flex space-x-3 text-sm">
          <div className='flex space-x-1 items-center'><IoEyeSharp/> <p>500 Views</p></div>
          <div className='flex space-x-1 items-center'><GoDotFill/> <p>7 months ago</p></div>
        </div>
        <div className="likes text-base space-x-2 flex justify-between items-center">
        <div className='flex justify-between items-center'>
        <AiFillLike />
        10k
        </div>
        <AiFillDislike/>

        </div>
        </div>
      </div>
      <hr />
      <div className="middle flex justify-between items-center">
      <div className="channel flex justify-start items-center space-x-2 my-2">
          <LazyLoadImage alt='img-banner' src="https://i.pinimg.com/736x/af/62/e3/af62e39726f946b578b8a8dff0f5220b.jpg" className='w-10 h-10 object-cover rounded-full'  />
          <div className="channelInfo text-sm">
          <p className=''>Mr Beast</p>
          <p>10k Subscribers</p>
          </div>
        </div>
        <button className='bg-red-600 h-2/3 text-white p-1 rounded-sm'>Subscribe</button>
      </div>
      <hr />
      <div className="down text-sm">
        <p>
        His team, which arrived in Nepal in December 2023, recently released a video detailing their renovation efforts at a hospital in Fikkal Rural Municipality, Sindhuli.
        </p>
        <button onClick={()=>{showMore()}} className='font-bold'>show more</button>
      </div>
      <hr />
    </div>
  )
}

export default Metadata