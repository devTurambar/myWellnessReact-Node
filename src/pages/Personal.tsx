import Title from "../components/Title"
import Button from "../components/Button"
import { Link } from "react-router-dom";
import React, { useContext, useEffect } from 'react';
import { UserContext, UserStorage } from '../userStorage'; // Import the created context

const Personal = () => {
    const data = useContext(UserContext);
    // const user = data?.userData;

    return (
        <div className="w-full">
            <Title title="Personal Information"/>
            <div className="nome">
                Name: {data?.userData.name}
            </div>
            <div className="weight">
                Weight (kg): {data?.userData.weight}
            </div>
            <div className="age">
                Age: {data?.userData.age}
            </div>
            <div className="height">
                Height (cm): {data?.userData.height}
            </div>
            <div className="gender">
                Gender: {data?.userData.gender}
            </div>
            <div className="tmc">
                TMC (kcal): {data?.userData.tmb}
            </div>
            <div className="ndc">
                NDC (kcal): {data?.userData.ndc}
            </div>
            <Link to="/pages/editPersonal">
                <Button 
                    buttonText="Edit"
                    func={() => {}}
                />
            </Link>
        </div>
    );
}

export default Personal;