import React, { useState } from 'react'
import Body from './components/Body'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {

  const [mode, setMode] = useState('dark');

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
