import React from 'react'

const LoginScreen = () => {
  return (
    <div className='bg-black h-screen w-screen flex justify-center items-center '>
        <div className="login bg-gray-900 text-center flex justify-center items-center flex-col space-y-3 p-20 rounded-md">
        <img src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png" alt="logo" className='w-3/5 object-cover' />
        <button className='p-4 rounded-md bg-black hover:bg-gray-800 text-white'>Login With Google</button>
        <p className='font-bold text-xl text-white'>A Youtube Project Made Using Youtube Api</p>
    </div>
    </div>
  )
}

export default LoginScreen