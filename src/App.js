import React, { Component } from 'react';
import logo from './static/img/logo_edrans.png';
import SingleInput from './components/Forms/Inputs/SingleInput';
import SubmitButton from './components/Buttons/SubmitButton';
import CountryWeather from './components/Pages/CountryWeather';
import ErrorAlert from './components/Pages/ErrorAlert';
import './main.scss';

const countries = require("i18n-iso-countries");
countries.registerLocale(require("i18n-iso-countries/langs/es.json"));

class App extends Component { 

  state = {
    countryName: "",
    countryCode: "",
    cityName: "",
    data: "",
    error: false
  }

  // Get country code 
  countryName = (event) => {
    const countryName = this.setState({ countryName : event.target.value})
    const countryValue = countries.getAlpha2Code(countryName, 'en')
    return this.setState({ countryCode : countryValue })
  }

  // Get city name
  cityName = (event) => {
    const city = event.target.value
    return this.setState({ cityName: city })
  }

  // Fetch Api by city and country
  fetchData = () => {
    const { cityName, countryCode } = this.state
    const apiKey = "&appid=c50ce90caf8560a25211639b16f8cb0d"
    const metric = "&units=metric"
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}${apiKey}${metric}`

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
    this.validateForm()
  }

   SectionTitle = () => {
    return (
      <section>
        <div className="img-logo">
          <img src={logo} alt="Edrans Logo"/>
        </div>
        <div>
          <h1>Weather Finder</h1>
        </div>
        <div>
          <p>
            Find out the temperature, <br/>
            Weather conditions and more...
          </p>
        </div>
      </section>
    )
  }

  SectionForm = () => {
    const { data, cityName, countryName } = this.state
    return (
      <section>
        <form>
          <SingleInput 
            type="text" 
            placeholder="Insert City..."
            onChange={this.cityName}
          />
          <SingleInput 
            type="text"
            placeholder="Insert Country..."
            onChange={this.countryName}
           />
           <SubmitButton 
            value="Search Weather" 
            onClick={this.handleSearch}
            city={cityName}
            country={countryName}
           />
        </form>
        {data && data.cod === 200 ? <CountryWeather data={data}/> : null }
        {data && data.cod !== 200 ? <ErrorAlert content="Error Data - City and/or Country not found"/> : null}
      </section>
    )
  }
  

  render() {
    const { SectionTitle, SectionForm} = this;
    
    return (
      <main className="main">
        <SectionTitle/>
        <SectionForm/>
      </main>
    )
  }
}

export default App;
