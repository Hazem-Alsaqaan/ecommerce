import React, { Fragment } from "react";
import SideNavigation from "../side navigation/SideNavigation";

const Men =({toggle})=>{
    return(
        <Fragment>
            <div className="container">
                <h4>men</h4>
                <div className="home-content">
                    <SideNavigation toggle={toggle}/>
                </div>
            </div>
        </Fragment>
    )
}
export default Men;