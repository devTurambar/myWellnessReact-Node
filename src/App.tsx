import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import Inside from './Inside';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Personal from "./pages/Personal";
import Summary from "./pages/Summary";
import Diet from './pages/Diet';
import MealCalculator from './pages/MealCalculator';


function App() {
  const classes = "flex min-h-screen flex-col items-center justify-between p-6 w-full";
  return (
    <div>
      <NavBar />
      <div className="App flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/Personal" element={<Personal />} />
          <Route path="/pages/Summary" element={<Summary />} />
          <Route path="/pages/Diet" element={<Diet />} />
          <Route path="/pages/MealCalculator" element={<MealCalculator />} />
        </Routes>
      </div>      
    </div>

  );
}

export default App;
