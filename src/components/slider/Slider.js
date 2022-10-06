import React, { Fragment } from "react";
import { useSelector } from "react-redux";
// import {fetchProducts} from "../../redux/action/fetchProducts"


const Slider = ()=>{
    const {products} = useSelector((state)=> state.products);

    return(
        <Fragment>
                            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                        <div  className="carousel-item active" data-bs-interval="10000">
                                        <img src={products[0].image} className="d-block w-100" max-width="200px" alt="..."/>
                                    </div>
                                    
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <img src={products[1].image} className="d-block w-100" max-width="200px" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={products[2].image} className="d-block w-100" max-width="200px" alt="..."/>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
        </Fragment>
    )
}

export default Slider;