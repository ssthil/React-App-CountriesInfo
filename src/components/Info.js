import React, { Component } from 'react';
import CountryInfo from './CountryInfo';

class Info extends Component {
    render () {
        let countryInfo = this.props.info;
        var info = countryInfo.map(country =>  
            <CountryInfo key={country.alpha2Code} country={country} />
        );
 
        return(
            <div className="row">{info}</div>
        )
    }
}

export default Info;