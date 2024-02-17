import Title from "../components/Title"

const Summary = () => {
    let weight = 81;
    let age = 30;
    let gender = "Male";
    let height = 177
    return (
        <div className="w-full">
            <Title title="Summary"/>
        </div>
    );
}

export default Summary;