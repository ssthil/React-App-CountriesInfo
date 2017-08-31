import React, { Component } from 'react';

class RegionList extends Component {

    myClick(event){
        console.log(event.target.innerHTML);

    }

    render() {

        const regionName = this.props.regions.map((region) => { 
            return <li className="ListItemCustom" key={region} onClick={this.myClick}>{region}</li> 
        })

        return(
            <ul className="ListCustom">
                {regionName} 
            </ul>
        )
    }
}

export default RegionList;