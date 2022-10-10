import React, { Fragment } from "react";
import "./Slider.css"
import { useSelector } from "react-redux";
import sliderFaceImg from "../../photo/landingBox_3.jpg"


const Slider = ()=>{
    
    const allProducts = useSelector((state)=> state.allProducts);


    return(
        <Fragment>
            <div className="slider-content one-box-slider">
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div  className="carousel-item active" data-bs-interval="10000">
                                <img src={sliderFaceImg} className="d-block w-100" height="300px" max-width="200px" alt="..."/>
                            </div>
                        {allProducts.products.map((item)=>
                        item.category === "electronics"?(
                            <div key={item.id} onSelect={(e)=> e.currentTarget.style.display = "block"} className="carousel-item" data-bs-interval="2000">
                                <img src={item.image} className="d-block w-100" height="300px" max-width="200px" alt="..."/>
                            </div>
                        ):null
                        )}
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
            </div>
        </Fragment>
    )
}

export default Slider;