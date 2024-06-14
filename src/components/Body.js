import React from 'react'
import Filters from './Filters'
import VideoCard from './VideoCard'

const Body = () => {
  return (
    <div className='col-span-6 box-border'>
        <Filters/>
        <div className="cards grid lg:grid-cols-3 grid-cols-1 mt-10">
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>

        </div>
    </div>
  )
}

export default Body