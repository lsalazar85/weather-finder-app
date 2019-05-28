import React, { Component } from  "react";
import { connect } from "react-redux";
import SectionForm from "../components/Forms/SectionForm";
import { setCity, setCountryName, fetchData, setError } from "../actions";


class FormContainer extends Component {

    // Get city name
    getCityName = event => {
        this.props.setCity(event.target.value)
    }

    // Get country code 
    getCountry = event => {
        this.props.setCountryName(event.target.value)
    }


    //Validate Form inputs fields by state values
    validateForm = () => {
        const { city, country } = this.props
        city === "" || country === "" ? 
        this.props.setError(true) : this.props.setError(false)    
    }

    // Search Weather Principal Function
    handleSearch = () => {
        this.props.fetchData();
        //this.validateForm();
    }

    render() {
        const { getCityName, getCountry, handleSearch, validateForm } = this;
        console.log(this.props.data)
        return (
            <SectionForm
                CityName={getCityName}
                CountryName={getCountry}
                handleSearch={handleSearch}
                //validateForm={validateForm}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        city: state.city,
        country: state.country,
        data: state.data,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => ({
    setCity: value => dispatch(setCity(value)),
    setCountryName: value => dispatch(setCountryName(value)),
    fetchData: () => dispatch(fetchData()),
    setError: value => dispatch(setError(value))
});

export default connect(mapStateToProps,mapDispatchToProps)(FormContainer);