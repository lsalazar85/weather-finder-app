import React from  "react";
import PropTypes from 'prop-types';
import SingleInput from './Inputs/SingleInput';
import SubmitButton from '../Buttons/SubmitButton';
//import ErrorAlert from "../Pages/ErrorAlert";
//import CountryWeather from "../Pages/CountryWeather"

const SectionForm = ({ CityName, CountryName, handleSearch }) => {
    return (
        <section>
            <h1 className="section-title">Insert Information</h1>
            <form>
                <SingleInput 
                    type="text" 
                    placeholder="Insert City..."
                    onChange={CityName}
                />
                <SingleInput 
                    type="text"
                    placeholder="Insert Country..."
                    onChange={CountryName}
                />
                <SubmitButton 
                    value="Search Weather" 
                    onClick={handleSearch}
                    //city={cityName}
                    //country={countryName}
                />
            </form>
            { /*{data && data.cod === 200 ? <CountryWeather data={data}/> : data && data.cod !== 200 ?
            <ErrorAlert content="Error Data - City and/or Country not found"/> : null } */}
        </section>
    )
}

SectionForm.propTypes = {
    handleSearch: PropTypes.func,
    validateForm: PropTypes.func,
    CityName: PropTypes.func,
    CountryName: PropTypes.func
}

export default SectionForm