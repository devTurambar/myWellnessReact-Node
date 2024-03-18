import Button from "../components/Button";
import { Link } from "react-router-dom";
import FormCalculatorLine from "./FormCalculatorLine";
import { useRef, useState } from "react";

interface Props {
    calculateMeal: (input: object) => void;
}

const FormCalculator: React.FC<Props> = (props) => {    
    const fieldsRef = useRef(null);

    const [fieldsArray, setFieldsArray] = useState([<FormCalculatorLine key={1} lineNumber="1"/>]);
    
    const addLine = () => {
        setFieldsArray([...fieldsArray,<FormCalculatorLine key={fieldsArray.length+1} lineNumber={`${fieldsArray.length+1}`} />])
    }
    const removeLine = () => {
        let copy = [...fieldsArray];
        copy.pop();
        setFieldsArray(copy);
    }
    const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (e.target instanceof HTMLFormElement) {
            const form = e.target;
            const formData = new FormData(form);
            const formJson = Object.fromEntries(formData.entries());
            props.calculateMeal(formJson);
        }else {
            // Handle the case where e.target is not an HTMLFormElement
            console.error("Unexpected event target type");
        }
        // e.preventDefault();
        // if (e.target instanceof HTMLFormElement) {
        //     const form = e.target;
        //     var formData = new FormData(form);
        //     for (const [key, value] of formData.entries()) { 
        //     console.log(key, value);
        //    }
        // }else {
        //     // Handle the case where e.target is not an HTMLFormElement
        //     console.error("Unexpected event target type");
        // }
    }
    return (
        <div className="block">
            <form className="" id="formCalc" onSubmit={handleClick}>
                <div className="flex gap-2">
                    <div className="flex flex-col" ref={fieldsRef}>
                        {fieldsArray.map(e => {
                            return e;
                        })}
                    </div>
                    <div className="mt-auto" onClick={addLine}>
                        <div className="plus">               
                        </div>
                    </div>
                    <div className={`mt-auto ${fieldsArray.length == 1 ? "hidden" : "block"}`} onClick={removeLine}>
                        <div className="minus">               
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <span className="">
                    {/* <Link to="../pages/MealResults"> */}
                            <Button 
                                buttonText="Submit"
                                type="submit"
                                func={() =>{}}
                            />
                        {/* </Link> */}
                    </span>                     
                </div>
            </form>
        </div>
    )
}
export default FormCalculator;