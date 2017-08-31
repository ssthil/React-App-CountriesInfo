import React, { Component } from 'react';
//import logo from './logo.svg';
import Header from './components/Header';
import SearchControl from './components/SearchControl';
import Info from './components/Info';
import RegionList from './components/RegionList';
import './App.css';

class App extends Component {
  constructor(props) {
        super(props);
        
        //this.filterName = this.filterName.bind(this);
       // this.onClick = this.myClick.bind(this);

        this.state = {
            title: "", //React App - Countries Info
            subtitle:"Collection of informations are here for all the countires.",
            info:[],
            regions:[],
            asianCountries:[],
            africaCountries:[],
            europeCountries:[],
            americasCountries:[],
            oceaniaCountries:[],
        }
    }

   /* filterName(event) {
      console.log("test")
      var updatedList = this.state.info;

      updatedList = updatedList.filter(function(item){ 
        return item.name.toLowerCase().search(
          event.target.value.toLowerCase()) !== -1;
      });

      this.setState({info: updatedList});
    }*/

    
    
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

        });

        
    }

  render() {



    this.state.info.map(country => { 
      if(this.state.regions.indexOf(country.region) === -1 && country.region !== "") {
           this.state.regions.push(country.region);
      }
      return this.state.regions;
    });
    // this.state.info.filter(function(object) { debugger
    //   if(object.region === 'Asia') {
    //     this.state.asianCountries.push(object)
    //   }
    //   return this.state.asianCountries;
    // })

    return (
      <div className="App">
        <Header title={this.state.title} secondtitle={this.state.subtitle}/>
        <div className="container-fluid">
          <RegionList regions={this.state.regions} />
          <SearchControl />
          <Info info={this.state.info} />
        </div>
      </div>
    );
  }
}

export default App;
