import Title from "../components/Title";
import { useState } from "react";
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../userStorage'; // Import the created context

const Home = () => {
    let weight = 81;
    let age = 30;
    let gender = "Male";
    let height = 177;


    return (
        <div className="w-full">
            <Title title="Homepage"/>
            
        </div>
    );
}

export default Home;