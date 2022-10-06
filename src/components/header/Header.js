import React, { Fragment } from "react";
import "./Header.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import Logo from "./logo/Logo";
import Search from "./search/Search";
import Nav from "./nav/Nav";
import { Link } from "react-router-dom";
import HomeLink from "./explore/HomeLink";

const Header = ({handleSideNavAppear})=>{
    return(
        <Fragment>
            <header className="main-header">
                    <section className="container header-container">
                        <Link to="/ecommerce"> <Logo/></Link>
                        <div className="bars"
                        onClick={handleSideNavAppear}><FontAwesomeIcon icon={faBars}/></div>
                        <HomeLink/>
                        <Search/>
                        <Nav/>
                    </section>
            </header>

        </Fragment>
    )
}

export default Header;