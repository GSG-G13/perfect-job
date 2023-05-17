import React, { Component } from 'react';
import Hero from './components/Hero';
import Jobs from './components/Jobs';
import SearchBar from './components/SearchSection';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: '',
      jobTitle: '',
    };
  }

  handleCountrySearch = (country) => {
    this.setState({ country });
  };

  handleJobSearch = (jobTitle) => {
    this.setState({ jobTitle });
  };

  render() {
    const { country, jobTitle } = this.state;

    return (
      <div className="App">
        <Hero />
        {/* <SearchBar onSearch={this.handleCountrySearch} /> */}
        <SearchBar onSearch={this.handleJobSearch} />
        <Jobs jobTitle={jobTitle} country={country} />
      </div>
    );
  }
}

export default App;
