import React from 'react'
import { auth , provider} from '../utils/firebase';
import {signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import {setToken, setUser} from '../utils/authSlice'
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async ()=>{
    try {

      const result = await signInWithPopup(auth , provider);
      console.log( "important" +  result);
      dispatch(setUser(result.user));
      dispatch(setToken(result._tokenResponse.oauthAccessToken));
      window.localStorage.setItem('token' , result.user.accessToken);

      
      navigate('/');
      
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className='bg-black h-screen w-screen flex justify-center items-center '>
        <div className="login bg-gray-900 text-center flex justify-center items-center flex-col space-y-3 p-20 rounded-md">
        <img src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png" alt="logo" className='w-3/5 object-cover' />
        <button onClick={handleLogin} class="px-4 py-2 border flex gap-2 hover:bg-slate-400 duration-200 rounded-lg bg-white">
        <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
        <span>Login with Google</span>
    </button>
        <p className='font-bold text-xl text-white'>A Youtube Project Made Using Youtube Api</p>
    </div>
    </div>
  )
}

export default LoginScreen