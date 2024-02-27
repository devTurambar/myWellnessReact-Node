import Title from "../components/Title"
import FormCalculator from "../components/FormCalculator";
import { useState } from "react";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";

const MealCalculator = () => {
    const navigate = useNavigate();

    const url = "https://api.calorieninjas.com/v1/nutrition?query=";
    //TVb+m4l5q+j01R3UHU9l3g==fwV6FoHBmlXZ02jH

    // fetch(url+input, {
    //     method: 'GET',
    //     headers: { 'X-Api-Key': 'TVb+m4l5q+j01R3UHU9l3g==fwV6FoHBmlXZ02jH'},
    // }).then(response => response.json())
    // .then(data => {
    //     console.log(data)
    // })
    // .then(response => response.json())

    const handleInputFormData = (input:object) => {
        interface Request {
            ingredient: string;
            status: string;
            weight: string;
            [key: string]: any;
          }
        const size = Object.keys(input).length;
        let requests:Request[] = [];
        let i = 0;
        for(const [key, value] of Object.entries(input)){
            const index = Number(key.slice(key.length-1))-1;
            const property = key.slice(0, key.length - 1) as 'ingredient' | 'status' | 'weight';

            if(!requests[index]){
                requests[index] = {} as Request
            }
            requests[Number(index)][property] = value;
        }
        console.log(requests)
        console.log("heree")
    }

    const getApiData = (input:object) => {
        console.log("here");
        console.log(input);
        handleInputFormData(input);
        // navigate("../pages/MealResults",{state:{id:1,name:'sabaoon'}});
        // fetch(url+input, {
        //     method: "GET",
        //     headers: { 'X-Api-Key': 'TVb+m4l5q+j01R3UHU9l3g==fwV6FoHBmlXZ02jH'}
        // })
        // .then(response => {
        //     if(!response.ok){
        //         if(response.status === 404){
        //             throw new Error("Data not found");
        //         }else if(response.status === 500){
        //             throw new Error("Server error");
        //         }else{
        //             throw new Error("Network response was not ok");
        //         }
        //     }
        //     return response.json();
        // }).then(data => {
        //     console.log(data);
        // }).catch (error => {
        //     console.error("Error:"+error);
        // });        
    }

    return (
        <div className="w-full">
            <Title title="Calories Calculator"/>
            <div className="flex flex-col items-center">
                <div className="flex gap-2 justify-center">
                    <div className="flex flex-col gap-2">
                        <FormCalculator getApiFunc={getApiData}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MealCalculator;