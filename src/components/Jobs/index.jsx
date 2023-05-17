import { Component } from 'react'
import axios from 'axios';
import JobCard from '../JobCard'
import Loading from '../Loading'

import './style.css'

import dummayData from './dummayData'

const getData = async ({jobTitle}) => {

    const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        params: {
          query: `${jobTitle || 'react developer in Texas'}, USA`,
          page: '1',
          num_pages: '1'
        },
        headers: {
          'X-RapidAPI-Key': '697f1806e4msh0a42ffb123096bep15de95jsnb5b4d48de7d4',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        return response.data
        // return {data: dummayData}
    } catch (error) {
        console.error(error);
    }
}

 class Jobs extends Component {
    state = {
        jobs: []
    }
componentDidMount() {
   getData({
    jobTitle: this.props.jobTitle
   }).then(data=> {
    this.setState({jobs: data.data})

   })
}

componentWillReceiveProps(nextProps) {
  if (nextProps.jobTitle !== this.props.jobTitle) {
  getData({
    jobTitle: nextProps.jobTitle
   }).then(data=> {
    this.setState({jobs: data.data})

   })
  }
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