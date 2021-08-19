import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Jsx from './jsx/Jsx';

//import App from './App';
//import jsx from './jsx/Jsx';
//import ClassComponent from './Components/ClassComponent'
//import FunctionalComponentsdemo from './Components/FunctionalComponents'
//import PropsExmpl from './props/PropsExmpl';
//import Counter from './States/Counter';
//import ConditionalRendering from './ConditionalRendering/ConditionalRendering';
//import SignInPage from './ConditionalRendering/SignInPage';
//import LoginPage from './ConditionalRendering/LoginPage';
//import ListAndKeys from './ListAndKeys/ListAndKeys';
//import LifeCycleMethod from './LifeCycleMethod/LifeCycleMethod';
//import UseStateHook from './Hooks/UseStateHook';
//import UseReducerHook from './Hooks/UseReducerHook'
import UseEffectHook from './Hooks/UseEffectHook';

import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>
  
  


 <UseEffectHook />
 



  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
