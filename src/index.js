import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import { Provider } from 'react-redux';
import store from './utils/store';
import Search from './components/Search';

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>
  } , 
  {
    path : "/auth",
    element : <LoginScreen/>
  } , 
  {
    path : "/search",
    element : <Search/>
  }
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
