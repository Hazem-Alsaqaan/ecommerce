import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faHeartCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../redux/reducers/cartSlice";
import { removeFavBox } from "../../redux/reducers/favoritesSlice";
import "./Favorites.css"

const Favorites =()=>{

    const favorites = useSelector((state)=> state.favoritesSlice);
    const dispatch = useDispatch();

    return(
        <Fragment>
                {favorites.length ? (
                    <div className="boxes container">{favorites.map((favBox)=>
                        <div key={favBox.id} className="box">
                        <div className="head-box">
                            <p className="offer">30% Off</p>
                            <div className="heart">
                                <FontAwesomeIcon title="remove from favorites"
                                onClick={()=>dispatch(removeFavBox(favBox))} icon={faHeartCircleXmark}/>
                            </div>
                        </div>
                        <div className="img-box">
                            <img src={favBox.image} alt=""/>
                        </div>
                        <div className="text-box">
                            <p>title: {favBox.category}</p>
                            <p>{favBox.title}</p>
                            <p>code: {favBox.rating.count}</p>
                            <p>price: {favBox.price}</p>
                        </div>
                        <div className="add-cart">
                            <FontAwesomeIcon icon={faCirclePlus} title="add to cart"
                            onClick={()=>dispatch(addCart(favBox))}/>
                        </div>
                    </div>
                    )}</div>
                ) : (
                    <div className="container">
                        <h6 className="text-center">No Found Favorites For You</h6>
                    </div>
                )}
        </Fragment>
    )
}

export default Favorites;