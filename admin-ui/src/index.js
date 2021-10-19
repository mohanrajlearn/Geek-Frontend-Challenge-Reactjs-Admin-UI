import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PageHeader } from 'antd';
ReactDOM.render(
  <React.StrictMode>
    <PageHeader
    className="site-page-header"
    onBack={() => null}
    title="MAILINATOR ORGANISATION DATABASE PORTAL"
    subTitle="The site for search, filter, update, delete, edit for members and admin details."
  />,
     <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
