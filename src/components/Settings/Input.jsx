import React from "react";

const Input = ({ lable, name, type,  handleChange, value}) =>(
    <div className ="form-group mt-3">
        <label className="font-weight-bold" htmlFor={ name } >{ lable }</label>
        <input
            id={ name }
            name={ name }

            onChange={ handleChange }
            value={ value }

            className="form-control" 
            type={ type }
            />
    </div>
);


export default Input;