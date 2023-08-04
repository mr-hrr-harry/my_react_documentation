import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './components/App/App'
// import WelcomeMssg from './components/WecomeMssg/WelcomeMssg';
// import Card from './components/Card/Card';
// import ClassComp from './components/ClassComp/ClassComp';
// import ClassProps from './components/ClassProps/ClassProps';
import FuncProps from './components/FuncProps/FuncProps';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <WelcomeMssg /> */}
    {/* <Card/> */}
    {/* <ClassComp /> */}

    {/* <ClassProps name='Harry' age={32} salary='32000' gender='Male'/>
    <ClassProps name='Sudhar' age={25} salary='64000' gender='Male'/>
    <ClassProps name='Joe' age={27} salary='60000' gender='Male'/> */}

    {/* <FuncProps name='Harry' age='22' salary='95000'></FuncProps>
    <FuncProps name='Sudhar' age='18' salary='100000'></FuncProps>
    <FuncProps name='Joe' age='20' salary='98000'></FuncProps> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
