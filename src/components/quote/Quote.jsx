import React from 'react'
import "./quote.css"
import allplan from "../statics/softwaresLogo/allplan_logo.png"
import revit from "../statics/softwaresLogo/revit_logo.png"
import autocad from "../statics/softwaresLogo/autocad_logo.png"
import recap from "../statics/softwaresLogo/recap_logo.png"
function Quote() {
  return (
    <div className='quote-main-container'>
        <div className="quote-container">
            <div className="question-container">
                <h1 className="question">Already Have A Project? </h1>
                <button className="cta quote-btn">Get Quote!!</button>
            </div>
            <div className="softwares">
                <div className="software-logo"><img src={allplan} alt="allplan" className="software-logo-img" /></div>
                <div className="software-logo"><img src={revit} alt="allplan" className="software-logo-img" /></div>
                <div className="software-logo"><img src={autocad} alt="allplan" className="software-logo-img" /></div>
                <div className="software-logo"><img src={recap} alt="allplan" className="software-logo-img" /></div>
            </div>
        </div>
    </div>
  )
}

export default Quote