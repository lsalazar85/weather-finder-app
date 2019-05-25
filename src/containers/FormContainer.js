import React, { Component } from  "react";
import { connect } from "react-redux";
import SectionForm from "../components/Forms/SectionForm";
import { setCity, setCountryName, getData } from "../actions";
import { apiKey, metric, url_root} from "../constants/api_parts";


const countries = require("i18n-iso-countries");
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

class FormContainer extends Component {

    // Get city name
    getCityName = event => {
        this.props.setCity(event.target.value)
    }

    // Get country code 
    getCountry = event => {
        this.props.setCountryName(event.target.value)
    }

    // Fetch Api by city and country
    fetchData = () => {
        const cityName = this.props.city && this.props.city.city;
        const countryName = this.props.country && this.props.country.country;
        const countryCode = countries.getAlpha2Code(countryName, 'en')
        const url = `${url_root}${cityName},${countryCode}${apiKey}${metric}`

        fetch(url) 
            .then((resp) => {
                return resp.json()
            }) 
            .then((data) => {
                this.props.getData(data)                   
            })
            .catch((error) => {
                console.log(error, "Error Data",)
            })
    }

    //Validate Form inputs fields by state values
    validateForm = () => {
        const { cityName, countryName } = this.state
        cityName === "" || countryName === "" ? 
        this.setState({ error : true }) : this.setState({ error : false })    
    }

    // Search Weather Principal Function
    handleSearch = () => {
        this.fetchData(); 
        //this.validateForm();
    }

    render() {
        const { getCityName, getCountry, handleSearch, validateForm } = this;
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
    getData: value => dispatch(getData(value))
});

export default connect(mapStateToProps,mapDispatchToProps)(FormContainer);