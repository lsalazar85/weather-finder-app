import React, { Component } from  "react";
import { connect } from "react-redux";
import SectionForm from "../components/Forms/SectionForm";
import { apiKey, metric, url_root} from "../constants/api_parts";

const countries = require("i18n-iso-countries");
countries.registerLocale(require("i18n-iso-countries/langs/es.json"));

class FormContainer extends Component {

    // Get country code 
    getCountryName = event => {
        const countryName = this.setState({ countryName : event.target.value})
        const countryValue = countries.getAlpha2Code(countryName, 'en')
        this.setState({ countryCode : countryValue })
    }

    // Get city name
    getCityName = event => {
        const city = event.target.value
        this.setState({ cityName: city })
    }

    // Fetch Api by city and country
    fetchData = () => {
        const { cityName, countryCode } = this.state
        const url = `${url_root}${cityName},${countryCode}${apiKey}${metric}`

        fetch(url) 
            .then((resp) => {
                return resp.json()
            }) 
            .then((data) => {
                this.setState({ data: data })                    
            })
            .catch((error) => {
                console.log(error, "Error Data",)
            })
    }

    //Validate Form inputs fields by state values
    validateForm = () => {
        const { cityName, countryName} = this.state
        cityName === "" || countryName === "" ? 
        this.setState({ error : true }) : this.setState({ error : false })    
    }

    // Search Weather Principal Function
    handleSearch = () => {
        this.fetchData(); 
        this.validateForm();
    }

    render() {
        const { handleSearch, validateForm, getCityName, getCountryName } = this;

        return (
            <SectionForm
                handleSearch={handleSearch}
                validateForm={validateForm}
                CityName={getCityName}
                CountryName={getCountryName}
            />
        )
    }
}


export default connect(null, null)(FormContainer);