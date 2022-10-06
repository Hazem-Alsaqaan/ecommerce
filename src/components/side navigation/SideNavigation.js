import React, { Fragment } from "react";
import "./SideNanigation.css"
import {faTv} from "@fortawesome/free-solid-svg-icons"
import {faGem} from "@fortawesome/free-solid-svg-icons"
import {faShirt} from "@fortawesome/free-solid-svg-icons"
import {faPersonDress} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Logo from "../header/logo/Logo"
import {Link} from "react-router-dom"


const SideNavigation = ({toggle})=>{
    const show = toggle ? "show" : null;



    return(
        <Fragment>
                <section className={`navigation ${show}`}>
                    <Logo/>
                    <section>
                        <ul>
                            <h6>Navigation</h6>
                            <Link to="/electronics">
                                <li>
                                    <FontAwesomeIcon icon={faTv}/><span>electronics</span>
                                </li>
                            </Link>
                            <Link to="/jewelery">
                                <li>
                                    <FontAwesomeIcon icon={faGem}/><span>jewelery</span>
                                </li>
                            </Link>
                            <Link to="/men">
                                <li>
                                    <FontAwesomeIcon icon={faShirt}/><span>men's clothing</span>
                                </li>
                            </Link>
                            <Link to="/women">
                                <li>
                                    <FontAwesomeIcon icon={faPersonDress}/><span>women's clothing</span>
                                </li>
                            </Link>
                        </ul>
                    </section>
                </section>
        </Fragment>
    )
}
export default SideNavigation;