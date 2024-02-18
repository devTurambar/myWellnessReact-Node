import Title from "../components/Title";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../userStorage'; // Import the created context

const EditPersonal = () => {
    const [input, setInput] = useState({
        name:"",
        weight:0
    });        
    const data = useContext(UserContext);

    interface FormData {
        name: string;
        weight: string;
        age: string;
        height: string;
        gender: string;
      }

    // const updatePersonal = ({formData}:{formData:FormData;}) => {
    //     data?.updateUserData({
    //         name:formData.name,
    //         weight: formData.weight
    //     });
    // }
    const updateName = (name:string) => {
        data?.updateUserData({
            name: name,
        });
    }
    const updateWeight = (weight:string) => {
        data?.updateUserData({
            weight: weight,
        });
    }
    const updateAge = (age:string) => {
        data?.updateUserData({
            age: age,
        });
    }
    const updateHeight = (height:string) => {
        data?.updateUserData({
            height: height,
        });
    }
    const updateGender = (gender:string) => {
        data?.updateUserData({
            gender: gender,
        });
    }

    const f = () => {
        console.log("func")
    }
    return (
        <div className="w-full px-10">
            <Title title="Edit Personal Information"/>
            <div className="">
                <form className="w-full flex flex-col items-center">
                    <div className="mb-4 flex justify-center gap-2 w-40 sm:w-60 md:w-80" id="name">
                        <label className="pr-2 w-1/5">
                            Name
                        </label>                           
                    <input type="text" className="bg-gray-200 border-2 rounded w-4/5" onChange={e => updateName(e.target.value)}
                    />
                    </div>
                    <div className="mb-4 flex justify-center gap-2 w-40 sm:w-60 md:w-80" id="">
                        <label className="pr-2 w-1/5">
                            Weight
                        </label>                           
                    <input type="text" className="bg-gray-200 border-2 rounded w-4/5" onChange={e => updateAge(e.target.value)} />
                    </div>
                    <div className="mb-4 flex justify-center gap-2 w-40 sm:w-60 md:w-80" id="">
                        <label className="pr-2 w-1/5">
                            Age
                        </label>                           
                    <input type="text" className="bg-gray-200 border-2 rounded w-4/5" onChange={e => updateHeight(e.target.value)} />
                    </div>
                    <div className="mb-4 flex justify-center gap-2 w-40 sm:w-60 md:w-80" id="">
                        <label className="pr-2 w-1/5">
                            Height
                        </label>                           
                    <input type="text" className="bg-gray-200 border-2 rounded w-4/5" onChange={e => updateGender(e.target.value)} />
                    </div>
                    <div className="mb-4 flex justify-center gap-2 w-40 sm:w-60 md:w-80" id="">
                        <label className="pr-2 w-1/5">
                            Gender
                        </label>                           
                    <input type="text" className="bg-gray-200 border-2 rounded w-4/5" onChange={e => updateWeight(e.target.value)} />
                    </div>
                    <Link to="../pages/Personal">
                        <Button 
                            buttonText="Edit"
                            func={f}
                        />
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default EditPersonal;