import React, { Fragment } from "react";
import "./Home.css"
import AllProducts from "../../components/allProducts/AllProducts";
import SideNavigation from "../../components/side navigation/SideNavigation";

const Home = ({toggle})=>{

    return(
        <Fragment>
            <div className="home-container">
                <div className="container">
                    <div className="home-content">
                        <SideNavigation toggle={toggle}/>
                        <AllProducts/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Home;