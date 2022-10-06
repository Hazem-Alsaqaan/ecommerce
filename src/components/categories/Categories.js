import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import {fetchProducts} from "../../redux/action/fetchProducts"
import "./Categories.css";

const Categories =()=>{

    const dispatch = useDispatch();
    
    return(
        <Fragment>
            <section className="categories-container">
                <button onClick={()=> dispatch(fetchProducts())} className="btn btn-danger m-3">All Products</button>
                <button  className="btn btn-danger m-3">brands</button>
            </section>
        </Fragment>
    )
}

export default Categories;