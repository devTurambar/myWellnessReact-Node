import Title from "../components/Title";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

const EditPersonal = () => {
    const [input, setInput] = useState({
        name:"",
        weight:0
    });
    return (
        <div className="w-full px-10">
            <Title title="Edit Personal Information"/>
            <div className="">
                <form className="w-full flex flex-col items-center">
                    <div className="mb-4 flex justify-center gap-2 w-40 sm:w-60 md:w-80" id="name2">
                        <label className="pr-2 w-1/5">
                            Name
                        </label>                           
                    <input type="text" className="bg-gray-200 border-2 rounded w-4/5" onChange={e => setInput(
                        {
                        ...input,
                            name:e.target.value
                        })}
                    />
                    </div>
                    <div className="mb-4 flex justify-center gap-2 w-40 sm:w-60 md:w-80" id="name2">
                        <label className="pr-2 w-1/5">
                            Weight
                        </label>                           
                    <input type="text" className="bg-gray-200 border-2 rounded w-4/5" />
                    </div>
                    <Link to="pages/Personal">
                        <Button 
                            buttonText="Edit"
                            func={() => {}}
                        />
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default EditPersonal;