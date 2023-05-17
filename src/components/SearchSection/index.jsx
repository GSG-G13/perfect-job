import React from 'react';
import { FaSearch } from 'react-icons/fa';

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
        <img src='https://www.ziprecruiter.com/assets/static/img/homepage/phil.png' alt='logo1-image' className='personImage' />
        <h1 className='header'>Welcome to our Job Search Website!</h1>
        <p className='jobP'>Find Your Perfect Job Opportunity.<br/>Start Your Journey Today with Our Comprehensive Job Search Website.</p>
        <form onSubmit={this.handleSearch} className='form-section'>
          <input
            type="text"
            placeholder="Search on your job..."
            value={searchTerm}
            onChange={this.handleInputChange}
          />
          <button type="submit" className="icon" onClick={this.handleSearch} onKeyDown={(e) => e.key === 'Enter' ? this.handleSearch : false}>
          <FaSearch /></button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
