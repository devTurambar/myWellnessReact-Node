import Title from "../components/Title"
import FormCalculator from "../components/FormCalculator";

const MealCalculator = () => {

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



    return (
        <div className="w-full">
            <Title title="Calories Calculator"/>
            <div className="flex gap-2 justify-center">
                <FormCalculator />
                <div className="flex justify-center items-center">
                    <div className="plus">
                                            
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default MealCalculator;