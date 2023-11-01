import React from 'react';
import ReactDOM from 'react-dom/client';
//import {Route } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import GQ from './components/GenderQuestion'
//import AG from '/components/AgeQuestion'
import BQ from './components/BMIQuestion'
import BSQ from './components/BloodSugarLevelQuestion';
//import BPQ from './components/BloodPressureLevelPage'
import T from './components/test'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
   
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/gq",
    element: <GQ/>,
  },
  // {
  //   path: "/ag",
  //   element: <AG/>,
  // },
  {
    path: "/bq",
    element: <BQ/>,
  },
  {
    path: "/bsq",
    element: <BSQ/>,
  },
  // {
  //   path: "/bpq",
  //   element: <BPQ/>,
  // },
  {
    path: "/t",
    element: <T/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
