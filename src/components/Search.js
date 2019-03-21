import React, {Component} from 'react';

 
class Search extends Component {

  // componentWillMount() {
  //   this.props.handleSearchInputChange('react tutorials');
  // }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          onChange={e => this.props.handleSearchInputChange(e.target.value)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;
