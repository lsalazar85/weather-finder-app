import React from 'react';
import './CountryWeather.scss';

const CountryWeather = (props) => {
    const data = props && props.data
    const city = data.name
    const country = data.sys.country
    const temperature = data.main.temp.toFixed()
    const humidity = data.main.humidity
    const conditions = data.weather[0].description

    return (
        <div className="country-weather">
            <div>
                <span>Location:</span>
                <span>{city}, {country}</span>
            </div>
            <div>
                <span>Temperature:</span>
                <span>{temperature} C</span>
            </div>
            <div>
                <span>Humidity:</span>
                <span>{humidity} %</span>
            </div>
            <div>
                <span>Conditions:</span>
                <span>{conditions}</span>
            </div>   
        </div>
    )
}

export default CountryWeather