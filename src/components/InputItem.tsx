interface props {
    errors?:any 
    className?:string,
    [key:string]:any
}

const InputItem = ({error,className = "",...rest}:props) => {
    return <fieldset className="wid-100">        
        <input 
            className={`${className} ${error ? "form-item-error" : "" }`}  
            {...rest}  
        />
        
        {error && (
            <p className="form__error flex flex-y-center">
                <i className="fa-solid fa-triangle-exclamation"></i>
                {error}
            </p>
        )}
    </fieldset>
}

export default InputItem