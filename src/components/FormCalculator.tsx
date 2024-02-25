const FormCalculator = () => {
    return (
        <div>
            <form className="w-full flex items-center justify-center gap-2">
                <div className="ingredient">
                    <label className="mr-2">
                    Ingredient                            
                    </label>
                    <input className="bg-gray-200 border-2 rounded" type="text"/>
                </div>
                <div className="status">
                    <label className="mr-2">
                    Status                           
                    </label>
                    <select className="bg-gray-200 border-2 rounded">
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
                <div className="quantity">
                    <label className="mr-2">
                    Quantity (g)                         
                    </label>
                    <input className="bg-gray-200 border-2 rounded" type="text"/>
                </div>                     
            </form>
        </div>
    )
}
export default FormCalculator;