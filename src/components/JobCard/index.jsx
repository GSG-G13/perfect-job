import { Component } from 'react'
import './style.css'

class JobCard extends Component {
  render() {
    const job = this.props.job
    return (
      <div className='job-card'>
        <div class="job-logo">
          <img src={job.employer_logo || 'https://cdn-payscale.com/content/placeholder-images/job-placeholder.png'} alt={job.job_title} className='card-logo' />
        </div>
        <div class="job-details">

          <div class="job-title">{job.employer_name}</div>
          <div className="location"> {job.job_city}</div>
          <div className="job-description"> {job.job_description}</div>
        
          <div class="job-footer">
            <div class="job-type">Full-time</div>
            <div class="apply-button">
              <a href="#" class="button">Apply Now</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default JobCard