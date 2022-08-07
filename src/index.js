import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoList from './components/todo';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import { Click } from './components/class/Click';

const root = ReactDOM.createRoot(document.getElementById('root'));

const storeValue = store()

root.render(
  <Provider store={storeValue}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='todo' element={<TodoList />} />
        <Route path='click' element={<Click />} />
      </Routes>
    </BrowserRouter>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
