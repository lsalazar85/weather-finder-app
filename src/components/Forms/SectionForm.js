import React from  "react";
import PropTypes from 'prop-types';
import SingleInput from './Inputs/SingleInput';
import SubmitButton from '../Buttons/SubmitButton';
//import ErrorAlert from "../Pages/ErrorAlert";
//import CountryWeather from "../Pages/CountryWeather"

const SectionForm = ({handleSearch, validateForm, getCityName}) => {
    return (
        <section>
            <h1 className="section-title">Insert Information</h1>
            <form>
                <SingleInput 
                    type="text" 
                    placeholder="Insert City..."
                    //onChange={this.getCityName}
                />
                <SingleInput 
                    type="text"
                    placeholder="Insert Country..."
                    //onChange={this.getCountryName}
                />
                <SubmitButton 
                    value="Search Weather" 
                    //onClick={this.handleSearch}
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
    getCityName: PropTypes.func
}

export default SectionForm