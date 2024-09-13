import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './navbar';
import TodoPage from './TodoPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <TodoPage/>
  </React.StrictMode>
);
