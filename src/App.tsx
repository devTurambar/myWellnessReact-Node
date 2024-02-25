import React , {useState, useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Personal from "./pages/Personal";
import Summary from "./pages/Summary";
import Diet from './pages/Diet';
import MealCalculator from './pages/MealCalculator';
import EditPersonal from './pages/EditPersonal';
import AppRoutes from './appRoutes'; 
import { SideBarContext } from "./sideBarStorage";

function App() {
  const side = useContext(SideBarContext);

  const classes = "flex min-h-screen flex-col items-center justify-between p-6 w-full";
  return (
    <div className="">
      <NavBar />
      <div className={`flex ${side?.sideBarOpen ?  "w-full" : "w-unset-640min"} w-unset-640min`}>
        <Sidebar />
        <div className={`${side?.sideBarOpen ?  "hidden" : "flex"} sm:flex min-h-screen flex-col items-center justify-between py-6 w-full`}>
          <AppRoutes />
        </div>

      </div>      
    </div>

  );
}

export default App;
