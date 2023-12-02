import React from 'react';
import ReactDOM from 'react-dom/client';
//import {Route } from "react-router-dom";
import App from './App';
import PAGE from './components/page'
import reportWebVitals from './reportWebVitals';
import GQ from './components/GenderQuestion'
import AQ from './components/AgeQuestion'
import NQ from './components/NeckQuestion'
import SQ from './components/SnoreQuestion'
import TQ from './components/TiredQuestion'
import OQ from './components/ObsQuestion'
import PQ from './components/PreQuestion'
import BQ from './components/BMIQuestion'
import SBR from './components/StopBangresult'
import T from './components/test'
import { GlobalProvider } from './GlobalContext';
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

  {
    path: "/bq",
    element: <BQ/>,
  },
  
  {
    path: "/t",
    element: <T/>,
  },

  {
    path: "/page",
    element: <PAGE/>,
  },

  {
    path: "/aq",
    element: <AQ/>,
  },

  {
    path: "/nq",
    element: <NQ/>,
  },

  {
    path: "/sq",
    element: <SQ/>,
  },

  {
    path: "/tq",
    element: <TQ/>,
  },

  {
    path: "/oq",
    element: <OQ/>,
  },
  
  {
    path: "/pq",
    element: <PQ/>,
  },
  {
    path: "/sbr",
    element: <SBR/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalProvider>
    <RouterProvider router={router} />
    </GlobalProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
