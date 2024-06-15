import React, { useEffect, useState } from 'react'
import Body from './components/Body'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('dark');
  const navigate = useNavigate();

  const user = useSelector((store)=>store.auth.accessToken);

  useEffect(() => {
    if(!user){
      navigate('/auth');
    }
  }, [user , navigate])
  

  const handleClick = ()=>{
    if (mode === 'dark') {
      setMode('light');
    }
    else{
      setMode('dark');
    }
  }

  return (
    <div className={`App duration-500 font-abc ${mode === 'dark' ? "text-white bg-black" : "text-black bg-white"}  overflow-x-hidden`}>
      <>
      <Header clicked={handleClick} mode={mode}/>
      <div className="brothers grid grid-cols-7 pt-20">
      <Sidebar/>
      <Body/>
      </div>
      </>
    </div>
  );
}

export default App;
