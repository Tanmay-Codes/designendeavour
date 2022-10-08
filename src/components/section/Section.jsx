import React from 'react'
import './section.css'
import CountUp from 'react-countup';
const Section = () => {
  return (
    <div className='section-container'>
      <div className="count-container">
        <div>
          <div className="number"><CountUp end={10} enableScrollSpy />+</div>
          <p className="number-heading">Years Of Experience</p>
        </div>
        <div>
          <div className="number"><CountUp end={100} enableScrollSpy />+</div>
          <p className="number-heading">Skills In Detailing</p>
        </div>
        <div>
          <div className="number"><CountUp end={10000} enableScrollSpy />+</div>
          <p className="number-heading">Projects Completed</p>
        </div>
      </div>
    </div>
  )
}

export default Section