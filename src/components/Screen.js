import React from 'react'
import Player from './Player'
import Metadata from './Metadata'
import CommentSection from './CommentSection'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { GoDotFill } from 'react-icons/go'
import { IoEyeSharp } from 'react-icons/io5'

const Screen = () => {
  return (
    <div className="screen space-x-2 col-span-6 grid grid-cols-1 lg:grid-cols-3 px-5">
        <div className="left col-span-1 lg:col-span-2">
            <Player/>
            <Metadata/>
            <CommentSection/>
            
        </div>
        <div className="right col-span-1">
            <h1 className='font-bold text-2xl m-2'>Up Next</h1>
            <div className="side-videos my-5">
                <div className="mini-video">
                    <div className="flex my-2 space-x-5">
                    <LazyLoadImage className='rounded-md w-2/5 h-32 object-cover' src='https://www.pcworld.com/wp-content/uploads/2024/03/4339568_original-1.jpg?quality=50&strip=all&w=1024' title='side-img'/>
                    <div className="info">
        <h1 className='font-semibold text-base'>Video Title</h1>
        <div className="video-info font-semibold flex justify-between items-center text-gray-500">
        <div className="info flex space-x-3 text-sm">
          <div className='flex space-x-1 items-center'><IoEyeSharp/> <p>500 Views</p></div>
          <div className='flex space-x-1 items-center'><GoDotFill/> <p>7 months ago</p></div>
        </div>
        </div>
        <div className="channel font-semibold text-gray-500">Mr Beast Channel</div>
                    </div>
                    </div>
                    <hr />
                </div>
                <div className="mini-video">
                    <div className="flex my-2 space-x-5">
                    <LazyLoadImage className='rounded-md w-2/5 h-32 object-cover' src='https://www.pcworld.com/wp-content/uploads/2024/03/4339568_original-1.jpg?quality=50&strip=all&w=1024' title='side-img'/>
                    <div className="info">
        <h1 className='font-semibold text-base'>Video Title</h1>
        <div className="video-info font-semibold flex justify-between items-center text-gray-500">
        <div className="info flex space-x-3 text-sm">
          <div className='flex space-x-1 items-center'><IoEyeSharp/> <p>500 Views</p></div>
          <div className='flex space-x-1 items-center'><GoDotFill/> <p>7 months ago</p></div>
        </div>
        </div>
        <div className="channel font-semibold text-gray-500">Mr Beast Channel</div>
                    </div>
                    </div>
                    <hr />
                </div>
                <div className="mini-video">
                    <div className="flex my-2 space-x-5">
                    <LazyLoadImage className='rounded-md w-2/5 h-32 object-cover' src='https://www.pcworld.com/wp-content/uploads/2024/03/4339568_original-1.jpg?quality=50&strip=all&w=1024' title='side-img'/>
                    <div className="info">
        <h1 className='font-semibold text-base'>Video Title</h1>
        <div className="video-info font-semibold flex justify-between items-center text-gray-500">
        <div className="info flex space-x-3 text-sm">
          <div className='flex space-x-1 items-center'><IoEyeSharp/> <p>500 Views</p></div>
          <div className='flex space-x-1 items-center'><GoDotFill/> <p>7 months ago</p></div>
        </div>
        </div>
        <div className="channel font-semibold text-gray-500">Mr Beast Channel</div>
                    </div>
                    </div>
                    <hr />
                </div>
                <div className="mini-video">
                    <div className="flex my-2 space-x-5">
                    <LazyLoadImage className='rounded-md w-2/5 h-32 object-cover' src='https://www.pcworld.com/wp-content/uploads/2024/03/4339568_original-1.jpg?quality=50&strip=all&w=1024' title='side-img'/>
                    <div className="info">
        <h1 className='font-semibold text-base'>Video Title</h1>
        <div className="video-info font-semibold flex justify-between items-center text-gray-500">
        <div className="info flex space-x-3 text-sm">
          <div className='flex space-x-1 items-center'><IoEyeSharp/> <p>500 Views</p></div>
          <div className='flex space-x-1 items-center'><GoDotFill/> <p>7 months ago</p></div>
        </div>
        </div>
        <div className="channel font-semibold text-gray-500">Mr Beast Channel</div>
                    </div>
                    </div>
                    <hr />
                </div>
                <div className="mini-video">
                    <div className="flex my-2 space-x-5">
                    <LazyLoadImage className='rounded-md w-2/5 h-32 object-cover' src='https://www.pcworld.com/wp-content/uploads/2024/03/4339568_original-1.jpg?quality=50&strip=all&w=1024' title='side-img'/>
                    <div className="info">
        <h1 className='font-semibold text-base'>Video Title</h1>
        <div className="video-info font-semibold flex justify-between items-center text-gray-500">
        <div className="info flex space-x-3 text-sm">
          <div className='flex space-x-1 items-center'><IoEyeSharp/> <p>500 Views</p></div>
          <div className='flex space-x-1 items-center'><GoDotFill/> <p>7 months ago</p></div>
        </div>
        </div>
        <div className="channel font-semibold text-gray-500">Mr Beast Channel</div>
                    </div>
                    </div>
                    <hr />
                </div>
                <div className="mini-video">
                    <div className="flex my-2 space-x-5">
                    <LazyLoadImage className='rounded-md w-2/5 h-32 object-cover' src='https://www.pcworld.com/wp-content/uploads/2024/03/4339568_original-1.jpg?quality=50&strip=all&w=1024' title='side-img'/>
                    <div className="info">
        <h1 className='font-semibold text-base'>Video Title</h1>
        <div className="video-info font-semibold flex justify-between items-center text-gray-500">
        <div className="info flex space-x-3 text-sm">
          <div className='flex space-x-1 items-center'><IoEyeSharp/> <p>500 Views</p></div>
          <div className='flex space-x-1 items-center'><GoDotFill/> <p>7 months ago</p></div>
        </div>
        </div>
        <div className="channel font-semibold text-gray-500">Mr Beast Channel</div>
                    </div>
                    </div>
                    <hr />
                </div>
                <div className="mini-video">
                    <div className="flex my-2 space-x-5">
                    <LazyLoadImage className='rounded-md w-2/5 h-32 object-cover' src='https://www.pcworld.com/wp-content/uploads/2024/03/4339568_original-1.jpg?quality=50&strip=all&w=1024' title='side-img'/>
                    <div className="info">
        <h1 className='font-semibold text-base'>Video Title</h1>
        <div className="video-info font-semibold flex justify-between items-center text-gray-500">
        <div className="info flex space-x-3 text-sm">
          <div className='flex space-x-1 items-center'><IoEyeSharp/> <p>500 Views</p></div>
          <div className='flex space-x-1 items-center'><GoDotFill/> <p>7 months ago</p></div>
        </div>
        </div>
        <div className="channel font-semibold text-gray-500">Mr Beast Channel</div>
                    </div>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    </div>
  
)}

export default Screen