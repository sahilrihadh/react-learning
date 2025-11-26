import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <img 
          src={props.logo} 
          alt="company-logo" 
        />
        <button>
          Save <Bookmark size={14} />
        </button>
      </div>

      <div className="center">
        <div>
          <h3>Amazon <span>5 days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
        </div>
        <div>
          <h4>Part Time</h4>
          <h4>Senior Level</h4>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>$120/hr</h3>
          <p>Mumbai, India</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  )
}

export default Card
