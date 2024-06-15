import axios from 'axios';
import React, {useState } from 'react'
import { YT_API_KEY, YT_CATEGORY_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setToken, setVideos } from '../utils/videoSlice';
import { keywords } from '../utils/constants';

const Filters = () => {

  const dispatch = useDispatch();
  const token = useSelector((store)=>store.video.nextPageToken);

  const fetchData = async (item , i)=>{
    dispatch(setLoading(true));
    const data = await axios.get(YT_CATEGORY_URL , {
      params : {
        part : 'snippet', 
        maxResults : 25,
        type : 'video',
        q : item, 
        key : YT_API_KEY,
        pageToken : token
      }
    })
    dispatch(setVideos(data.data.items));
    dispatch(setToken(data.data.nextPageToken));
    dispatch(setLoading(false));
    // console.log(data.data.items);
    
  }

const handleClick = (item , i)=>{

  fetchData(item , i);
  setActiveElement(i);

}

  const [activeElement, setActiveElement] = useState("All")

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