import React, { Fragment } from "react";
import SideNavigation from "../side navigation/SideNavigation";

const Jewelery = ({toggle})=>{
    return(
        <Fragment>
            <div className="container">
                <h4>jewelery</h4>
                <div className="home-content">
                    <SideNavigation toggle={toggle}/>
                </div>
            </div>
        </Fragment>
    )
}
export default Jewelery;