import Title from "../components/Title"
import FormCalculator from "../components/FormCalculator";
import { useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const MealCalculator = () => {
    const [formLines, setFormLines] = useState([<FormCalculator key={1}/>]);

    const url = "https://api.calorieninjas.com/v1/nutrition?query=";
    const input = "lasagna"
    //TVb+m4l5q+j01R3UHU9l3g==fwV6FoHBmlXZ02jH

    // fetch(url+input, {
    //     method: 'GET',
    //     headers: { 'X-Api-Key': 'TVb+m4l5q+j01R3UHU9l3g==fwV6FoHBmlXZ02jH'},
    // }).then(response => response.json())
    // .then(data => {
    //     console.log(data)
    // })
    // .then(response => response.json())

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

    const addFormLine = () => {
        setFormLines([...formLines,<FormCalculator key={formLines.length+1} />])
    }
    // setFormLines(formLines.splice(formLines.length-2,0,<FormCalculator key={formLines.length+1} />))



    return (
        <div className="w-full">
            <Title title="Calories Calculator"/>
            <div className="flex flex-col items-center">
                <div className="flex gap-2 justify-center">
                    <div className="flex flex-col gap-2">
                        {/* {formLines.map(e => {return e})}                    */}
                        <FormCalculator />
                    </div>
                    {/* <div className="flex justify-center items-center mt-auto" onClick={addFormLine}>
                        <div className="plus">               
                        </div>
                    </div> */}
                </div>
                {/* <span className="">
                    <Button 
                        buttonText="Submit"
                        func={() =>{}}
                    />
                </span> */}
            </div>
        </div>
    );
}

export default MealCalculator;