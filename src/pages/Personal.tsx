import Title from "../components/Title"
import Button from "../components/Button"
import { Link } from "react-router-dom";

const Personal = () => {
    let weight = 81;
    let age = 30;
    let gender = "Male";
    let height = 177
    return (
        <div className="w-full">
            <Title title="Personal Information"/>
            <div className="nome">
                Name: {"Jonh Doe"}
            </div>
            <div className="weight">
                Weight: {weight+" kg"}
            </div>
            <div className="age">
                Age: {age+" years"}
            </div>
            <div className="height">
                Height: {height} cm
            </div>
            <div className="gender">
                Gender: {gender}
            </div>
            <Link to="/pages/editPersonal">
                <Button 
                    buttonText="Edit"
                    func={() => {}}
                />
            </Link>
        </div>
    );
}

export default Personal;