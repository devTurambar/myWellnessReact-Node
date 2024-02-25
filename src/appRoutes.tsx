import './App.css';
import {  Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Personal from "./pages/Personal";
import Summary from "./pages/Summary";
import Diet from './pages/Diet';
import MealCalculator from './pages/MealCalculator';
import EditPersonal from './pages/EditPersonal';
import MealResults from './pages/MealResults';


function appRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/Personal" element={<Personal />} />
        <Route path="/pages/Summary" element={<Summary />} />
        <Route path="/pages/Diet" element={<Diet />} />
        <Route path="/pages/MealCalculator" element={<MealCalculator />} />
        <Route path="/pages/editPersonal" element={<EditPersonal />} />     
        <Route path="/pages/MealResults" element={<MealResults />} />     
      </Routes>

  );
}

export default appRoutes;
