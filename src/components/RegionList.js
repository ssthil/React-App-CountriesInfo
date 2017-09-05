import React, { Component } from 'react';

class RegionList extends Component {


   /* handleRegionList(e) {
        console.log(e.target.innerHTML);
        e.preventDefault();

        this.state.info.filter(function(object) { 
           if(object.region === e.target.innerHTML) {
             this.state.info.push(object)
           }
           
         })
    }*/
    render() {
        console.log(this.props.info);
        console.log(this.props.regions);
        let regionName = this.props.regions.map((region) => { 
            return <li className="ListItemCustom" key={region} onClick={this.props.onClick}>{region}</li> 
        })

        return(
            <ul className="ListCustom">
                {regionName} 
            </ul>
        )
    }
}

export default RegionList;