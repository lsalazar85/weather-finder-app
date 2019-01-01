import React from 'react';
import './ErrorAlert.scss';

const ErrorAlert = (props) => {
    const { content } = props 
    return (
        <div className="error-alert">
            <span>{content}</span>
        </div>
    )
}

export default ErrorAlert