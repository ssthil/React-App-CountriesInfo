import React, { Component } from 'react';
import CountryInfo from './CountryInfo';

class Info extends Component {
    
    render () {
        var info = this.props.info.map(country =>  
           
              <CountryInfo key={country.alpha2Code} country={country} />
            
        );

        
        return(
            <div className="row">{info}</div>
        )
    }
}

export default Info;