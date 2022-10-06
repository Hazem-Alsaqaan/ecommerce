import React, { Fragment } from "react";
import "./Nav.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faStar} from "@fortawesome/free-solid-svg-icons"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav =()=>{
    const carts = useSelector((state)=> state.cartSlice);
    const favorites = useSelector((state)=> state.favoritesSlice);
    return(
        <Fragment>
            <nav>
                <ul>
                    <Link to="/favorites">
                        <li>
                            <span className="link-text">Favorites</span>
                            <span className="num-icon">
                                <FontAwesomeIcon icon={faStar}/>
                                <span className="fav">{favorites.length}</span>
                            </span>
                        </li>
                    </Link>
                    <Link to="/cart">
                        <li>
                            <span className="link-text">cart</span>
                            <span className="num-icon">
                                <FontAwesomeIcon icon={faCartShopping}/>
                                <span className="fav-cart">{carts.length}</span>
                            </span>
                        </li>
                    </Link>
                </ul>
            </nav>
        </Fragment>
    )
}
export default Nav;