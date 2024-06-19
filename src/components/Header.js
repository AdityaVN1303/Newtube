import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { YT_API_KEY, YT_CATEGORY_URL } from '../utils/constants';
import { setLoading, setToken, setVideos } from '../utils/videoSlice';

const Header = ({clicked , mode}) => {

  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleSearch = async ()=>{
    if (!input) {
      return;
    }
    try {
      dispatch(setLoading(true));
      const data = await axios.get(YT_CATEGORY_URL , {
        params : {
          part : 'snippet',
          maxResults : 25,
          q : input ,
          key : YT_API_KEY,
          pageToken : ''
        }
      })
      console.log(data);
      dispatch(setVideos(data.data.items));
      dispatch(setLoading(false));
      dispatch(setToken(data.data.nextPageToken));
    } catch (error) {
      console.log(error);
    }
  }



  const userInfo = useSelector((store)=>store.auth.user);

  return (
    <div className={`header lg:px-10 ${mode === 'dark' ? "bg-black" : "bg-white"} z-10 text-white flex justify-between items-center p-3 fixed right-0 left-0`}>
      <Link to="/"><img src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png" alt="icon" className='w-12' /></Link>
      <div className={`search w-3/5 flex ${mode === 'dark' ? "border-white" : "border-black text-black"} justify-between items-center mx-5`}>
      <input value={input} onChange={(e)=>{setInput(e.target.value)}} type="text" className='w-full border-l-2 border-t-2 border-b-2  bg-transparent p-2'/>
      <button onClick={handleSearch}><CiSearch className='font-bold text-2xl z-30 cursor-pointer border-t-2 border-r-2 border-b-2  box-content p-2'/></button>
      </div>
      <div className="features flex space-x-1 items-center">
        <div className="mode rounded-full bg-slate-800 p-1" onClick={clicked}>
          {
            mode === 'dark' ?
            <CiLight className="text-4xl"/> : <MdDarkMode className="text-4xl"/>
          }
        </div>
       {
        userInfo?.photoURL &&  <div className="profile w-10 h-10 rounded-full">
        <LazyLoadImage src={userInfo.photoURL} alt="profilepic" className='rounded-full w-full' />
      </div>
       }
      </div>
    </div>
  )
}

export default Header