import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import { Provider } from 'react-redux';
import store from './utils/store';
import Screen from './components/Screen';
import Body from './components/Body';
import ChannelElement from './components/ChannelElement';

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>, 
    children : [
      {
        path : "/",
    element : <Body/>
      } , 
      {
        path : "/watch/:id",
    element : <Screen/>
      },
      {
        path : "/channel/:id",
        element : <ChannelElement/>
      },
    ]
  } , 
  {
    path : "/auth",
    element : <LoginScreen/>
  } , 

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
