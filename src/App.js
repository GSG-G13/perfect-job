import React, { Component } from 'react';
import Hero from './components/Hero';
import Jobs from './components/Jobs';
import SearchBar from './components/SearchSection';

<<<<<<< HEAD
import Hero from './components/Hero'
import Jobs from './components/Jobs'
import SearchSection from './components/SearchSection'
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
<Hero />
<SearchSection />
{/* <Jobs /> */}
<Footer/>
    </div>
  );
=======
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
        <SearchBar onSearch={this.handleJobSearch} />
        <Jobs jobTitle={jobTitle} country={country} />
      </div>
    );
  }
>>>>>>> 8f3d38e0468ca533ccee476057b80fb4ed2f9e67
}

export default App;
