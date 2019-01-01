import React from 'react';
import './SubmitButton.scss';

const SubmitButton = (props) => {
    const { onClick, value, city, country } = props
    const values = city === "" || country === ""
    
    return (
        <input className={values ? "submit-button disabled" : "submit-button"}
         type="button" onClick={onClick}
         value={value} disabled={values ? true : false}/>
    )
}

export default SubmitButton;