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
    <img src='https://www.ziprecruiter.com/assets/static/img/homepage/phil.png' alt='logo1-image'/>
        <h1 className='header'> Welcome!</h1>
  
         
        <form onSubmit={this.handleSearch} className='form-section'>
          <input
            type="text"
            placeholder="Search on your job..."
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
