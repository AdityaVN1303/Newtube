import moment from 'moment'
import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import parse from 'html-react-parser'

const Comment = ({data}) => {
  return (
    <div className="comment">
     {
      data && <>
       <div className="comment flex justify-start items-center space-x-2 my-2">
          <LazyLoadImage alt='img-banner' src={data?.authorProfileImageUrl} className='w-10 h-10 object-cover rounded-full'  />
          <div className="channelInfo text-sm">
          <div className="user-info space-x-2 flex justify-start items-center">
          <p className=''>{data?.authorDisplayName}</p>
          <p className='flex items-center'><GoDotFill/> <span>{moment(data?.publishedAt).fromNow()}</span></p>
          </div>
          <p className='text-base'>{parse(data?.textDisplay)}</p>
          </div>
        </div>
        <hr />
      </>
     }
    </div>
  )
}

export default Comment