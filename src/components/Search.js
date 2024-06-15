import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Search = () => {

    const navigate = useNavigate();

    const user = useSelector((store)=>store.auth.accessToken);
  
    useEffect(() => {
      if(!user){
        navigate('/auth');
      }
    }, [user , navigate])

  return (
    <div>Search</div>
  )
}

export default Search