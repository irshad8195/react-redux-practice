import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import reduxStore from './store';
import ReactRouter from './ReactRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* //<BrowserRouter> */}
    <Provider store={reduxStore}>
    <App />
    </Provider>
    
    {/* </BrowserRouter> */}
    
  </React.StrictMode>
);



