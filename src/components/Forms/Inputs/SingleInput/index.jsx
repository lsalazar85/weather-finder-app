import React from 'react';
import TextField from '@material-ui/core/TextField';
import './SingleInput.scss';

const SingleInput = (props) => {
    const { type, placeholder, onChange } = props
    const valueInput = onChange
    
    return (
        <TextField
          className="single-input" 
          type={type} 
          id="outlined-bare"
          defaultValue={placeholder}
          margin="normal"
          variant="outlined"
          onChange={valueInput} 
        />
    )
}

export default SingleInput;