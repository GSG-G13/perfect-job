import React from 'react';

import './style.css'
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  
      searchTerm: '',
    };
  }



  handleInputChange = (event) => {
    const searchTerm = event.target.value;
    this.setState({ searchTerm });
  };

  handleSearch = (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    this.props.onSearch(searchTerm);
  };

  render() {
    const { searchTerm } = this.state;

    return (
      <div className={`input-box`}>
         
        <form onSubmit={this.handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={this.handleInputChange}
          />
          <button type="submit" className="icon" onClick={this.handleSearch} onKeyDown={(e)=>e.key === 'Enter'?this.handleSearch:false}> 
          Search</button>
        </form>
       
      </div>
    );
  }
}

export default SearchBar;
