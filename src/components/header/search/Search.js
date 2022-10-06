import React, { Fragment } from "react";
import "./Search.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons"
import {faSearch} from "@fortawesome/free-solid-svg-icons";



const Search = ()=>{

    return (
        <Fragment>
            <div className="header-search">
                <input type="search" placeholder="All" />
                <FontAwesomeIcon icon={faCaretDown}/>
                <FontAwesomeIcon icon={faSearch}/>
            </div>
        </Fragment>
    )
}

export default Search;