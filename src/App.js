import React, { Component } from 'react';
//import logo from './logo.svg';
import Header from './components/Header';
import Info from './components/Info';
import './App.css';

class App extends Component {
  constructor () {
        super();
        this.state = {
            title: "React App - Countries Info",
            subtitle:"Collection of informations are here for all the countires.",
            info:[]
        }
    }

    componentDidMount () {
        fetch('https://restcountries-v1.p.mashape.com/all')
        .then(response => {
          return response.json()
        })
        .then(data => { 
          this.setState({
              info: data
          });
            console.log(data);
        })
    }

  render() {
    return (
      <div className="App">
        <Header title={this.state.title} secondtitle={this.state.subtitle}/>
        <div className="container-fluid">
          
              <Info info={this.state.info} />
          
        </div>
      </div>
    );
  }
}

export default App;
