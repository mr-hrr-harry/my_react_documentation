import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'font-awesome/css/font-awesome.css'

import App from './components/App/App';
import HelloWorld from './components/HelloWorld/HelloWorld';
import FuncComp from './components/FuncComp/FuncComp';
import ClassComp from './components/ClassComp/ClassComp';
import ClassProps from './components/ClassProps/ClassProps';
import FuncProps from './components/FuncProps/FuncProps';
import ClassStates from './components/ClassStates/ClassStates';
import FuncStates from './components/FuncStates/FuncStates';
import BootStrap from './components/Bootstrap/Bootstrap';
import BootstrapCards from './components/Bootstrap2/BootstrapCards';
import Counter from './components/EventHandling/Counter/Counter';
import Greeting from './components/EventHandling/Greetings/Greetings';
import CartStatus from './components/EventHandling/Cart/CartStatus'
import CartList from './components/EventHandling/ItemsCart/Items';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />  */}
    <HelloWorld />
    {/* <FuncComp/> */}
    {/* <ClassComp /> */}

    {/* <ClassProps name='Harry' age={32} salary='32000' gender='Male'/>
    <ClassProps name='Sudhar' age={25} salary='64000' gender='Male'/>
    <ClassProps name='Joe' age={27} salary='60000' gender='Male'/> */}

    {/* <FuncProps name='Harry' age='22' salary='95000'></FuncProps>
    <FuncProps name='Sudhar' age='18' salary='100000'></FuncProps>
    <FuncProps name='Joe' age='20' salary='98000'></FuncProps> */}

    {/* <ClassStates></ClassStates> */}

    {/* <FuncStates /> */}
    
    {/* <BootStrap></BootStrap> */}
    {/* <BootstrapCards></BootstrapCards> */}
    {/* <Counter></Counter> */}
    {/* <Greeting /> */}

    {/* <CartStatus /> */}
    <CartList></CartList>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
