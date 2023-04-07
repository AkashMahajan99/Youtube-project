import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';

const AppLayout = () => {
    return (
      <div className=' flex h-20 bg-slate-400 border-solid border mt-4 '>
    
       <Header/>
      </div>
    );
  };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);