import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = ({ job }) => {
  return (
    <div className="card">
      <div className="top">
        <div className='brand'><img src={job.brandLogo} alt={`${job.company} logo`} /></div>
        <button className='btnSave'>
          Save <Bookmark size={14} />
        </button>
      </div>

      <div className="center">
        <div>
          <h3>
            {job.company}
            <span>{job.datePosted}</span>
          </h3>
          <h2>{job.post}</h2>
        </div>
        <div>
          <h4>{job.tag1}</h4>
          <h4>{job.tag2}</h4>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>{job.pay}</h3>
          <p>{job.location}</p>
        </div>
        <button className='btnPrimary'>Apply Now</button>
      </div>
    </div>
  )
}

export default Card
