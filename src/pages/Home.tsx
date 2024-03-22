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
            <p className="text-center">
                22/03/2024 - Next incoming feature: Add mannually calories per serving size to get results (Calories Calculator)
            </p>
        </div>
    );
}

export default Home;