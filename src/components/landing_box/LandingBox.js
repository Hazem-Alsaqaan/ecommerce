import React, { Fragment } from "react"

import "./LandingBox.css"

const LandingBox =({img_1, img_2})=>{
    return(
        <Fragment>
            <div className="landing">
                <div className="landing-box">
                    <img src={img_1} alt="..."/>
                    <div className="landing-box-text">
                        <h1>fashion</h1>
                        <h1>design</h1>
                        <h1>style</h1>
                    </div>
                </div>
                <div className="landing-box">
                    <img src={img_2} alt="..."/>
                    <div className="landing-box-text">
                        <h1>fashion</h1>
                        <h1>design</h1>
                        <h1>style</h1>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default LandingBox;