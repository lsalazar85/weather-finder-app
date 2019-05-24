import React from "react"
import logo from '../../static/img/logo-app.png';

const SectionTitle = () => {
    return (
        <section>
            <div className="img-logo">
                <img src={logo} alt="Weather Logo"/>
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

export default SectionTitle
