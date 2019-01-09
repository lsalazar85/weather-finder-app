import React from 'react';
import './SubmitButton.scss';

const SubmitButton = (props) => {
    const { onClick, value, city, country } = props
    const isErrorCondition = city === "" || country === ""
    
    return (
        <input className={isErrorCondition ? "submit-button disabled" : "submit-button"}
         type="button" onClick={onClick}
         value={value} disabled={isErrorCondition ? true : false}/>
    )
}

export default SubmitButton;