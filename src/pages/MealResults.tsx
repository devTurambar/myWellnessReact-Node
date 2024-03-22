
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

    let totalKcal = 0;
    let totalProt = 0;

    const location = useLocation();
    console.log("mealresults")
    console.log(location)
    return (
        <div className="w-full">
            <Title title="Meal Results"/>
            <div className="grid grid-flow-row justify-center">
                <div className="grid grid-flow-col gap-8 border-t-2 border-r-2 border-l-2">
                    <div>Ingredient</div>
                    <div>Kcalories</div>
                    <div>Protein</div>
                    <div>Serving Size</div>
                </div>
                {location.state.data.map((e:Result) => {
                    totalKcal+=e.calories;
                    totalProt+=e.protein_g;
                    return (
                        <div className="grid grid-flow-col gap-8 border-t-2 border-r-2 border-l-2">
                            <div className="">{e.name}</div>
                            <div>{e.calories}</div>
                            <div>{e.protein_g}</div>
                            <div>{e.serving_size_g}</div>
                        </div>
                    ) 
                })}
                <div className="grid grid-flow-col gap-8 border-t-2 border-r-2 border-l-2">
                    <div>Total</div>
                    <div>{totalKcal}</div>
                    <div>{totalProt}</div>
                    <div>122</div>
                </div>
            </div>
        </div>
    );
}

export default MealResults;