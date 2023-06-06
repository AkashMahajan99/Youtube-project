import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import Sidebar from './src/components/Sidebar';
import Videocontainer from './src/components/Videocontainer';

const AppLayout = () => {
    return (
      <div className=' '>
    <div>
       <Header/>
      </div>
      <div className='flex flex-row h-[calc(100vh-50px)]'>
        <Sidebar/>
      <Videocontainer/>
      </div>
      </div>
    );
  };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);