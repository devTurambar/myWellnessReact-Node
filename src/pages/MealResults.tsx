
import Title from "../components/Title"
import FormCalculator from "../components/FormCalculator";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const MealResults = () => {
    const location = useLocation();
    console.log(location)
    return (
        <div className="w-full">
            <Title title="Meal Results"/>
        </div>
    );
}

export default MealResults;