import React, { Component } from 'react';
//import logo from './logo.svg';
import Header from './components/Header';
//import SearchControl from './components/SearchControl';
//import Info from './components/Info';
import CountryInfo from './components/CountryInfo';
import RegionList from './components/RegionList';
import './App.css';

class App extends Component {
  constructor(props) {
        super(props);
        
        this.state = {
            title: "React App - Countries Info", //
            subtitle:"Collection of informations are here for all the countires.",
            info:[],
            regions:[],
            search:'',
            selectedCountries:[],

            asianCountries:[],
            africaCountries:[],
            europeCountries:[],
            americasCountries:[],
            oceaniaCountries:[],
        }

        this.handleRegionList = this.handleRegionList.bind(this);
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


    handleRegionList(e) {

      console.log(e.target.innerHTML);
      if(document.querySelector('.ListItemCustomClicked')){
        document.querySelector('.ListItemCustomClicked').classList.remove('ListItemCustomClicked');
      }
      
      e.target.className = 'ListItemCustom ListItemCustomClicked' ;
      let newArray =[];
      e.preventDefault();
      let countryInfo = this.state.info.filter(
        (object) => { 
         if(object.region === e.target.innerHTML) {
          console.log(object);
          newArray.push(object);
          this.setState({
            info: newArray
          });
         }
        
        
        if(e.target.innerHTML === 'All') {
           console.log(this.props.info)
        }

       });
       
    }

    updateSearch(event) {
      this.setState({search:event.target.value.substr(0,20) })
    }

  render() { 
    let countryInfo = this.state.info.filter(
      (country) => {
        return country.name.indexOf(this.state.search) !== -1;
      }
    );
    this.state.info.map(country => { 
      if(this.state.regions.indexOf(country.region) === -1 && country.region !== "") {
           this.state.regions.push(country.region);
      }
      return this.state.regions;
    });
    

    return (
      <div className="App">
        <Header title={this.state.title} secondTitle={this.state.subtitle} />
        <div className="container-fluid">
          <RegionList regions={this.state.regions} onClick={this.handleRegionList}/>
          
         
            <form className="form-horizontal">
                <div className="form-group">
                  <label className="control-label col-sm-3">Search </label>
                  <div className="col-sm-8">
                    <input type="text" placeholder="Search here"  className="form-control" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
                  </div>
                </div> 
            </form>
          <div className="row">
            {
              countryInfo.map((country) => {
                  return <CountryInfo key={country.alpha2Code} country={country} />
              })
            }
          </div>
          {/* <Info info={this.state.info}/>  */}
        </div>
      </div>
    );
  }
}

export default App;
