import { Component } from 'react'
import './style.css'

 class JobCard extends Component {
  render() {
    const job = this.props.job 
    return (
      <div className='card-container'>
         <img src={job.employer_logo || 'https://cdn-payscale.com/content/placeholder-images/job-placeholder.png'} alt={job.job_title} className='card-logo'
        />
        <div className='card-content'>test</div>
      </div>
    )
  }
}


export default JobCard