import React,  { Component } from 'react';

class CountryInfo extends Component {
    render () {
        return (
            <div className="col-lg-3 col-md-4 col-sm-12">
                <div className="CustomPanel">
                    <h5>{this.props.country.name}</h5>
                    <p>Capital: {this.props.country.capital}</p>
                    <p>Region: {this.props.country.region}</p>
                    <p>Sub-Region: {this.props.country.subregion}</p>
                </div>
            </div>
        );
    }
}

export default CountryInfo;