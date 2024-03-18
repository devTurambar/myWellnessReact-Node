import Title from "../components/Title"
import FormCalculator from "../components/FormCalculator";
import { useState } from "react";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";


interface Request {
    ingredient: string;
    status: string;
    weight: string;
    [key: string]: any;
    }
const MealCalculator = () => {
    const navigate = useNavigate();

    const url = "https://api.calorieninjas.com/v1/nutrition?query=";
    //TVb+m4l5q+j01R3UHU9l3g==fwV6FoHBmlXZ02jH

    //fatscret api
    const url2 = "https://platform.fatsecret.com/rest/server.api?"

    // fetch(url+input, {
    //     method: 'GET',
    //     headers: { 'X-Api-Key': 'TVb+m4l5q+j01R3UHU9l3g==fwV6FoHBmlXZ02jH'},
    // }).then(response => response.json())
    // .then(data => {
    //     console.log(data)
    // })
    // .then(response => response.json())

    const handleInputFormData = (input:object) => {

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
        console.log(requests[0].ingredient)
        return requests;
    }

    // const getFormInput = (input:{ingredient:string, status:string, weight:string}[]) => {

    const calculateMeal = (input:object) => {
        const request = handleInputFormData(input);
        console.log(request);
        const result = fetchApi(request);
    }

    const fetchApi = (request:Request[]) => {
        let allRequests = "";
        request.map(e => {
            allRequests = allRequests+e.weight+"g "+e.status+" "+e.ingredient+" ";
        });
        console.log("request eh "+allRequests);
        fetch(url+allRequests, {
            headers: { 'X-Api-Key': 'TVb+m4l5q+j01R3UHU9l3g==fwV6FoHBmlXZ02jH'}
        })
        .then(response => {
            if(!response.ok){
                if(response.status === 404){
                    throw new Error("Data not found");
                }else if(response.status === 500){
                    throw new Error("Server error");
                }else{
                    throw new Error("Network response was not ok");
                }
            }
            return response.json();
        }).then(data => {
            showResults(data.items);
        }).catch (error => {
            console.error("Error:"+error);
            return error;
        });          
    }

    const showResults = (result:object) => {
        navigate("../pages/MealResults",{state:{ data: result}});
      
    }

    return (
        <div className="w-full">
            <Title title="Calories Calculator"/>
            <div className="flex flex-col items-center">
                <div className="flex gap-2 justify-center">
                    <div className="flex flex-col gap-2">
                        <FormCalculator calculateMeal={calculateMeal}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MealCalculator;