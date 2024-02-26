import Button from "./Button";
import { Link } from "react-router-dom";

const FormCalculatorLine = ({lineNumber}:{lineNumber:string}) => {
    return (
        <div className="w-full grid grid-flow-row sm:grid-flow-col grid-auto-column-form gap-2">
            <div className="ingredient flex flex-col flex-1">
                <label className="mr-2">
                    Ingredient                            
                </label>
                <input className="bg-gray-200 border-2 rounded" name={`ingredient${lineNumber}`} type="text" form="formCalc" required />
            </div>
            <div className="flex gap-2 flex-1">
                <div className="status flex flex-col w-1/2">
                    <label className="mr-2">
                    Status                           
                    </label>
                    <select className="bg-gray-200 border-2 rounded" name={`status${lineNumber}`} form="formCalc">
                        <option>

                        </option>
                        <option value="raw">
                            Raw
                        </option>
                        <option value="grilled">
                            Grilled
                        </option>
                        <option value="boiled">
                            Boiled
                        </option>
                    </select>
                </div> 
                <div className="weight flex flex-col w-1/2">
                    <label className="mr-2">
                        Weight (g)                         
                    </label>
                    <input className="bg-gray-200 border-2 rounded" name={`weight${lineNumber}`} type="number" form="formCalc" required/>
                </div> 
            </div>                 
        </div>
    )
}
export default FormCalculatorLine;