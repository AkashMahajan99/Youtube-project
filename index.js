import React from 'react';
import './index.css';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
import { store } from './src/redux/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Maincontainer from './src/components/Maincontainer';
import WatchPage from './src/components/WatchPage/WatchPage';
import SearchResultPage from './src/components/WatchPage/SearchResultPage';

const appRouter = createBrowserRouter([{
  path:"/",
  element: <Body/> ,
  children:[
    {
      path:"/",
      element: <Maincontainer/>
    },
    {
      path:"watch",
      element: <WatchPage/>
    },
    {
      path:"SearchResults",
      element: <SearchResultPage/>
    }
  ]
}])
const AppLayout = () => {
    return (
      <Provider store={store}>
      
    <RouterProvider router={appRouter}/>
     
      </Provider>
    );
  };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);