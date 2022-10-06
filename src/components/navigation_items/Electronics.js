import React, { Fragment } from "react";
import SideNavigation from "../side navigation/SideNavigation";


const Electronics = ({toggle})=>{

    return(
        <Fragment>
            <div className="container">
                <h4>electronics</h4>
                <div className="home-content">
                    <SideNavigation toggle={toggle}/>
                </div>
            </div>
        </Fragment>
    )
}
export default Electronics