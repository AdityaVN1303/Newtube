import axios from 'axios';
import React, {useState } from 'react'
import { YT_API_KEY, YT_CATEGORY_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { setVideos } from '../utils/videoSlice';

const Filters = () => {

  const dispatch = useDispatch();

  const fetchData = async (item , i)=>{
    const data = await axios.get(YT_CATEGORY_URL , {
      params : {
        part : 'snippet', 
        maxResults : 25,
        type : 'video',
        q : item, 
        key : YT_API_KEY
      }
    })
    dispatch(setVideos(data.data.items));
    // console.log(data.data.items);
    
  }

const handleClick = (item , i)=>{

  fetchData(item , i);
  setActiveElement(i);

}

  

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
          return <button onClick={()=>{handleClick(item, i)}} key={i} 
          className={`rounded-xl  border-white ${i === activeElement ? "bg-blue-600 text-white" : ""} border-2 p-2`}>
            {item}
          </button>
        })
      }
    </div>
  )
}

export default Filters