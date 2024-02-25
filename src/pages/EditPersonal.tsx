import Title from "../components/Title";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../userStorage'; // Import the created context
import { useRef } from 'react';

const EditPersonal = () => {
    const myRef = useRef<HTMLSpanElement>(null);

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
        if(gender === "Unicorn"){
            displayErrorMessage();
        }else{
            data?.updateUserData({
                gender: gender,
            });
            hideErrorMessage();
        }

    }
    const displayErrorMessage = () => {
        if(myRef.current)
            myRef.current.style.display = "block"
    }

    const hideErrorMessage = () => {
        if(myRef.current)
            myRef.current.style.display = "none"
    }
    const updateTmb = (tmb:string) => {
        data?.updateUserData({
            tmb: tmb,
        });
    }

    const updateNdc = (ndc:string) => {
        data?.updateUserData({
            ndc: ndc,
        });
    }

    const calculateTmb = () => {
        let tmb;
        //mulher
        if(data?.userData.gender === "F" || data?.userData.gender === "f"){
            tmb = 447.593 + (9.247* Number(data?.userData.weight)) + (3.098* Number(data?.userData.height)) - (4.330* Number(data?.userData.age));
            console.log("tmb eh "+tmb);
        //homem
        }else{
            tmb = 88.3624 + (13.397* Number(data?.userData.weight)) + (4.799* Number(data?.userData.height)) - (5.677* Number(data?.userData.age));
            console.log("tmb eh "+tmb);
        }
        return tmb;
    }

    //Necessidade diária de caloricas
    //O resultado consiste em uma estimativa aproximada da quantidade total de calorias que o corpo precisa em um dia para manter suas funções vitais e níveis de atividade.
    //NDC - de 500 a 600 calorias = Quantidade máxima de calorias que pode ser ingerida diariamente
    const calculateNdc = () => {
        return calculateTmb() * 1.55;
    }
    const updateTmbNdc = () => {
        let tmb = calculateTmb();
        let ndc = calculateNdc();
        data?.updateUserData({
            tmb: tmb.toString(),
            ndc: ndc.toString(),
        });
    }
    return (
        <div className="w-full px-10">
            <Title title="Edit Personal Information"/>
            <div className="flex flex-col items-center gap-2 justify-center">
                <form className="grid grid-flow-row grid-auto-column-form gap-2 flex-1">
                    <div className="mb-4 flex justify-center gap-2" id="name">
                        <label className="pr-2">
                            Name
                        </label>                           
                        <input type="text" className="bg-gray-200 border-2 rounded w-4/5" onChange={e => updateName(e.target.value)}
                    />
                    </div>
                    <div className="mb-4 flex justify-center gap-2" id="">
                        <label className="pr-2">
                            Weight (kg)
                        </label>                           
                        <input type="text" className="bg-gray-200 border-2 rounded" onChange={e => updateWeight(e.target.value)} />
                    </div>
                    <div className="mb-4 flex justify-center gap-2" id="">
                        <label className="pr-2">
                            Age
                        </label>                           
                        <input type="text" className="bg-gray-200 border-2 rounded" onChange={e => updateAge(e.target.value)} />
                    </div>
                    <div className="mb-4 flex justify-center gap-2" id="">
                        <label className="pr-2">
                            Height (cm)
                        </label>                           
                        <input type="text" className="bg-gray-200 border-2 rounded" onChange={e => updateHeight(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <div className="mb-4 flex justify-center gap-2" id="">
                            <label className="pr-2">
                                Gender
                            </label>
                            <select className="bg-gray-200 border-2 rounded" onChange={e => updateGender(e.target.value)}>
                                <option></option>
                                <option value="M">M</option>
                                <option value="F">F</option>
                                <option value="Unicorn">Unicorn</option>
                            </select>       
                        </div>
                        <span ref={myRef} className="hidden text-small text-santas">There are only 2 genders, u ape</span>                   
                    </div>

                    <Link to="../pages/Personal">
                        <Button 
                            buttonText="Edit"
                            func={updateTmbNdc}
                            type="submit"
                        />
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default EditPersonal;