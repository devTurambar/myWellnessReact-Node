type ButtonType = "submit" | "reset" | "button" | undefined;

const Button = ({buttonText, type, func}:{buttonText:string;type:ButtonType;func:React.MouseEventHandler<HTMLButtonElement>;}) => {
    return (
        <button 
            type={type}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
        >
            {buttonText}
        </button>
    )
};
export default Button;