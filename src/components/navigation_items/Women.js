import React, { Fragment } from "react";
import SideNavigation from "../side navigation/SideNavigation";

const Women =({toggle})=>{
    return(
        <Fragment>
            <div className="container">
                <h4>women</h4>
                <div className="home-content">
                    <SideNavigation toggle={toggle}/>
                </div>
            </div>
        </Fragment>
    )
}
export default Women;