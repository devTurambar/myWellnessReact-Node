import Title from "../components/Title"
import Button from "../components/Button"
import { Link } from "react-router-dom";
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../userStorage'; // Import the created context
import { SideBarContext } from '../sideBarStorage'; // Import the created context

const Personal = () => {
    const data = useContext(UserContext);
    const side = useContext(SideBarContext);

    return (
        <div className="max-w-96 flex flex-col items-center">
            <Title title="Personal Information"/>
            <div className="info flex flex-col">
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
            </div>
            <Link to="/pages/editPersonal">
                    <Button 
                        buttonText="Edit"
                        func={() => {}}
                        type="submit"
            />
            </Link> 
        </div>
    );
}

export default Personal;