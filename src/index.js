import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThankYou from './components/ThankYou';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/success' element={<ThankYou />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
