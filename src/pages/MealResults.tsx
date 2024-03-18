
import Title from "../components/Title"
import FormCalculator from "../components/FormCalculator";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const MealResults = () => {
interface Result {
    name: string;
    calories: number;
    serving_size_g: number;
    protein_g: number;
}

    const location = useLocation();
    console.log("mealresults")
    console.log(location)
    return (
        <div className="w-full">
            <Title title="Meal Results"/>
            <div className="grid grid-flow-row justify-center">
                {location.state.data.map((e:Result) => {
                    return (
                        <div className="grid grid-flow-col gap-8 border-t-2 border-r-2 border-l-2">
                            <div className="">{e.name}</div>
                            <div>{e.calories}</div>
                            <div>{e.protein_g}</div>
                            <div>{e.serving_size_g}</div>
                        </div>
                    ) 
                })}
            </div>
        </div>
    );
}

export default MealResults;