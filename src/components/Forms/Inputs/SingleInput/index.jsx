import React from 'react';
import './SingleInput.scss';

const SingleInput = (props) => {
    const { type, placeholder, onChange } = props
    const valueInput = onChange
    
    return (
        <input
            className="single-input" 
            type={type} 
            placeholder={placeholder} 
            onChange={valueInput}  
        />
    )
}

export default SingleInput;