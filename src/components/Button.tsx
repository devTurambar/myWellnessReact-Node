const Button = ({buttonText, func}:{buttonText:string;func:React.MouseEventHandler<HTMLButtonElement>;}) => {
    return (
        <button 
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
            onClick={func}
        >
            {buttonText}
        </button>
    )
};
export default Button;