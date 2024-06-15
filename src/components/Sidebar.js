import React from 'react'
import { IoMdHome } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";
import { IoMdThumbsUp } from "react-icons/io";
import { MdHistory } from "react-icons/md";
import { MdLibraryBooks } from "react-icons/md";
import { MdSentimentDissatisfied } from "react-icons/md";
import { IoMdExit } from "react-icons/io";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {

  const navigate = useNavigate();

  const handleLogout = async ()=>{
    try {
      await auth.signOut();
      navigate('/auth');
      console.log("User logged out successfully");
    } catch (error) {
      
    }
  }

  return (
    <nav className=' col-span-1 p-2'>
        <ul className='space-y-5'>
          <li className='flex justify-start space-x-3 items-center text-lg hover:bg-blue-500 hover:text-white rounded-md duration-100 cursor-pointer p-2'>
            <IoMdHome className='text-2xl'/>
            <span className='hidden lg:block'>HOME</span>
          </li>
          <li className='flex justify-start space-x-3 items-center text-lg hover:bg-blue-500 hover:text-white rounded-md duration-100 cursor-pointer p-2'>
            <MdSubscriptions className='text-2xl'/>
            <span className='hidden lg:block'>Subscriptions</span>
          </li>
          <li className='flex justify-start space-x-3 items-center text-lg hover:bg-blue-500 hover:text-white rounded-md duration-100 cursor-pointer p-2'>
            <IoMdThumbsUp className='text-2xl'/>
            <span className='hidden lg:block'>Liked Videos</span>
          </li>
          <li className='flex justify-start space-x-3 items-center text-lg hover:bg-blue-500 hover:text-white rounded-md duration-100 cursor-pointer p-2'>
            <MdHistory className='text-2xl'/>
            <span className='hidden lg:block'>History</span>
          </li>
          <li className='flex justify-start space-x-3 items-center text-lg hover:bg-blue-500 hover:text-white rounded-md duration-100 cursor-pointer p-2'>
            <MdLibraryBooks className='text-2xl'/>
            <span className='hidden lg:block'>Playlists</span>
          </li>
          <li className='flex justify-start space-x-3 items-center text-lg hover:bg-blue-500 hover:text-white rounded-md duration-100 cursor-pointer p-2'>
            <MdSentimentDissatisfied className='text-2xl'/>
            <span className='hidden lg:block'>Disliked Videos</span>
          </li>
        <hr />
        <li onClick={handleLogout} className='flex justify-start space-x-3 items-center text-lg hover:bg-blue-500 hover:text-white rounded-md duration-100 cursor-pointer p-2'>
            <IoMdExit className='text-2xl'/>
            <span className='hidden lg:block'>Logout</span>
          </li>
        </ul>


    </nav>
  )
}

export default Sidebar