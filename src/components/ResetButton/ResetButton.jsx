import React from "react";

const ResetButton = ({resetit}) => (
    <button 
        onClick={ resetit }
        className="btn btn-danger mb-2"
    >Reset</button>
);
export default ResetButton; 