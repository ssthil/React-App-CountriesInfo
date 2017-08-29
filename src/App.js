import React, { Component } from 'react';
//import logo from './logo.svg';
import Header from './components/Header';
import Info from './components/Info';
import './App.css';

class App extends Component {
  constructor(props) {
        super(props);

        this.filterName = this.filterName.bind(this);

        this.state = {
            title: "React App - Countries Info",
            subtitle:"Collection of informations are here for all the countires.",
            info:[]
        }
    }

    filterName(event) {

      var updatedList = this.state.info;

      updatedList = updatedList.filter(function(item){ 
        return item.name.toLowerCase().search(
          event.target.value.toLowerCase()) !== -1;
      });

      this.setState({info: updatedList});
    }
    
    componentDidMount () {
        const apiUrl = 'https://restcountries.eu/rest/v2/all';
        fetch(apiUrl)
        .then(response => {
          return response.json()
        })
        .then(data => { 
          this.setState({
              info: data
          });
          //console.log(data);
        });

        
    }

  render() {
    return (
      <div className="App">
        <Header title={this.state.title} secondtitle={this.state.subtitle}/>
        <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <input type="text" placeholder="Search here" value={this.state.search}  className="form-control" onChange={this.filterName}/>
                </div>
              </div>
              <Info info={this.state.info} />
        </div>
      </div>
    );
  }
}

export default App;
