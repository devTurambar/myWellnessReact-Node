import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Personal from "./pages/Personal";
import Summary from "./pages/Summary";
import Diet from "./pages/Diet";
import MealCalculator from "./pages/MealCalculator";
import editPersonal from "./pages/EditPersonal";
import EditPersonal from './pages/EditPersonal';
import { UserStorage } from './userStorage'; // Import your UserProvider
import { SideBarStorage } from './sideBarStorage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <SideBarStorage>
      <UserStorage>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <App />}>
              <Route path="/pages/Personal" element={<Personal />} />
              <Route path="/pages/Summary" element={<Summary />} />
              <Route path="/pages/Diet" element={<Diet />} />
              <Route path="/pages/MealCalculator" element={<MealCalculator />} />
              <Route path="/pages/editPersonal" element={<EditPersonal />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserStorage>      
    </SideBarStorage>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
