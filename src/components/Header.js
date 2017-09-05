import React, { Component } from 'react';

class Header extends Component {
    render() {
         
        return (
            <div>
                <div className="App-header">
                    <h2>{this.props.title}</h2>
                </div>
                <p className="App-intro">
                    {this.props.secondTitle}
                </p>
            </div>
        )
    }
}

export default Header;