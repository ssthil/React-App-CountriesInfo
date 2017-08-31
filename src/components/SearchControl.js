import React, { Component } from 'react';

class SearchControl extends Component {
    constructor(props) { debugger
        super(props);
        this.state = { updatedList: this.props.info }
    }

    

    filterName(event) {
        /*var updatedList = this.props.info;
  
        updatedList = updatedList.filter(function(item){ 
          return item.name.toLowerCase().search(
            event.target.value.toLowerCase()) !== -1;
        });*/
  
        //this.setState({info: updatedList});
        console.log(event.target.value)
      }
    render() {

        console.log(this);

        return(
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                <input type="text" placeholder="Search here" value={this.props.search}  className="form-control" onChange={this.filterName}/>
                </div>
            </div>
        );
    }
}

export default SearchControl;