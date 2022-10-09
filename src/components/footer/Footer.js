import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

const Footer =()=>{
    return(
        <Fragment>
            <section className="containe-fluidr footer">
                <Link to = "/contact">
                    <h4>contact us</h4>
                </Link>
            </section>
        </Fragment>
    )
}
export default Footer;