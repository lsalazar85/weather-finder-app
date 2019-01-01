import React from 'react';
import './SingleInput.scss';

const SingleInput = (props) => {
    const { type, placeholder, onChange } = props
    return (
        <input
            className="single-input" 
            type={type} 
            placeholder={placeholder} 
            onChange={onChange}  
        />
    )
}

export default SingleInput;