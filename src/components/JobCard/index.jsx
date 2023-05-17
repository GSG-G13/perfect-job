import { Component } from 'react'
import './style.css'

 class JobCard extends Component {
  render() {
    const job = this.props.job 
    return (
      <div className='card-container'>
         <img src={job.employer_logo || 'https://cdn-payscale.com/content/placeholder-images/job-placeholder.png'} alt={job.job_title} className='card-logo'
        />
        <div className='card-content'>
         <h4 className='card-header'> {job.employer_name}</h4>
          <p className='text-header'>{job.job_city}</p>
          <div className='skills'>{job.job_required_skills}/</div>
          <div className='position'>{job.job_employment_type}</div>
          <span className='timeStamp'>{job.job_posted_at_timestamp}</span>
        </div>
      </div>
    )
  }
}


export default JobCard