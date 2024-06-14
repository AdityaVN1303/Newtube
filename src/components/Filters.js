import React, { useState } from 'react'

const Filters = () => {

  const [activeElement, setActiveElement] = useState("All")

  const keywords = [
    'All',
    'React js',
    'Angular js',
    'React Native',
    'use of API',
    'Redux',
    'Music',
    'Algorithm Art ',
    'Guitar',
    'Bengali Songs',
    'Coding',
    'Cricket',
    'Football',
    'Real Madrid',
    'Gatsby',
    'Poor Coder',
    'Shwetabh',
 ]

  return (
    <div className="filters w-full flex space-x-1 m-2 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide ">
      {
         keywords.map((item , i)=>{
          return <button onClick={()=>{setActiveElement(i)}} key={i} 
          className={`rounded-xl  border-white ${i === activeElement ? "bg-blue-600 text-white" : ""} border-2 p-2`}>
            {item}
          </button>
        })
      }
    </div>
  )
}

export default Filters