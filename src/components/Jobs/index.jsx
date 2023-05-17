import { Component } from 'react'
import axios from 'axios';
import JobCard from '../JobCard'
import Loading from '../Loading'

import './style.css'

const getData = async () => {
    const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        params: {
          query: 'Python developer in Texas, USA',
          page: '1',
          num_pages: '1'
        },
        headers: {
          'X-RapidAPI-Key': '8cba5c6b26mshc1b723a4c3ed4c8p1d71d6jsnc19b243a0859',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

 class Jobs extends Component {
    state = {
        jobs: []
    }
componentDidMount() {
   getData().then(data=> {
    this.setState({jobs: data.data})

   })
}
    
  render() {
const jobs = this.state.jobs
    return (
      <div className='Jobs-container'>
      
        {jobs.length === 0 
        ?   <Loading />
        : jobs.map(job => {
            return <JobCard job={job} key={job.job_id}/>
        }) }
      </div>
    )
  }
}


export default Jobs