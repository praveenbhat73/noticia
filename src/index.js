import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

// ReactDOM.render will take two html Element -> one is html tag and html code purpose is to display specified html code in specified html Element
//the code -> what and all is wrapped inside app.js is rendered in html-> index.html -> div with root id
//after the rendering this can be seen on website
//ReactDOM.render(<p>Hello</p>, document.getElementById('root'));-> like this we use app.js which contains code 