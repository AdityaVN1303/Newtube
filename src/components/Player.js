import React from 'react'

const Player = () => {
  return (
    <div className="player">
      <iframe width="100%" height="100%" className='h-[40vh] lg:h-[60vh]' allowFullScreen src="https://www.youtube.com/embed/Mos5QJAje28?si=U4AB2rjQlpzqlLg6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default Player