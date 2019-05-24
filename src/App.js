import React, { Component } from 'react';
import SectionTitle from "./components/Pages/SectionTitle"
import FormContainer from './containers/FormContainer';
import './main.scss';

class App extends Component { 

  render() {
    return (
      <main className="main">
        <SectionTitle/>
        <FormContainer/>
      </main>
    )
  }
}

export default App;
