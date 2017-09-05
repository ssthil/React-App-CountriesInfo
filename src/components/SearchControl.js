import React, { Component } from 'react';

class SearchControl extends Component {

    render() {
        
        return(
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                <input type="text" placeholder="Search here"  className="form-control" />
                </div>
            </div>
        );
    }
}

export default SearchControl;