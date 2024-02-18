import React from 'react';
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



function App() {
  const classes = "flex min-h-screen flex-col items-center justify-between p-6 w-full";
  return (
    <div>
      <NavBar />
      <div className="App flex">
        <Sidebar />
        <div className='flex min-h-screen flex-col items-center justify-between p-6 w-full'>
          <AppRoutes />
        </div>

      </div>      
    </div>

  );
}

export default App;
