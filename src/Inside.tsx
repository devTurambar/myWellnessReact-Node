import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Personal from "./pages/Personal";

function Inside({classes}:{classes:string;}) {
  return (
    <div className={"inside "+classes}>


    </div>
  );
}

export default Inside;
