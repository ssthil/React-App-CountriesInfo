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
             <form className="form-horizontal">
                <div className="form-group">
                  <label className="control-label col-sm-3">Filter by </label>
                  <div className="col-sm-8">
                    <ul className="ListCustom pull-left">
                        <li className="ListItemCustom" onClick={this.props.onClick}>All</li>
                        {regionName} 
                    </ul>
                  </div>
                </div> 
            </form>
        )
    }
}

export default RegionList;