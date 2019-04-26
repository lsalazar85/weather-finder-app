import React from 'react';
import Button from '@material-ui/core/Button';
import './SubmitButton.scss';

const SubmitButton = (props) => {
    const { onClick, value, city, country } = props
    const isErrorCondition = city === "" || country === ""
    
    return (
        <React.Fragment>
            <Button  variant="contained" className="submit-button"
                onClick={onClick}
                color="white"
                value={value} disabled={isErrorCondition ? true : false}>
                Search Weather
            </Button>
        </React.Fragment>
    )
}

export default SubmitButton;