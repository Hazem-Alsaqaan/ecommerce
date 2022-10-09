import React, { Fragment } from "react";
import "./Home.css"
import AllProducts from "../../components/allProducts/AllProducts";
import SideNavigation from "../../components/side navigation/SideNavigation";
import Slider from "../../components/slider/Slider";
import RightSide from "../../components/right_side/RightSide";
import LandingBox from "../../components/landing_box/LandingBox";
import blueMen from "../../photo/men_2.jpg"
import yellow from "../../photo/landingBox_2.jpg"
import redLanding from "../../photo/men_1.jpg"
import greenLanding from "../../photo/landingBox_4.jpg"

const Home = ({toggle})=>{

    return(
        <Fragment>
            <div className="home-container">
                <div className="container">
                        <h4>all products</h4>
                    <div className="container-fluid home-content">
                        <SideNavigation toggle={toggle}/>
                        <Slider/>
                        <RightSide/>
                    </div>
                        <LandingBox img_1={blueMen} img_2={yellow}/>
                        <AllProducts/>
                        <LandingBox img_1={redLanding} img_2 = {greenLanding}/>
                </div>
            </div>
        </Fragment>
    )
}
export default Home;