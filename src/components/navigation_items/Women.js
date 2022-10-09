import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/action/fetchProducts";
import ProductBox from "../product_box/ProductBox";
import SideNavigation from "../side navigation/SideNavigation";

const Women =({toggle})=>{
    const  womensClothing = useSelector((state)=> state.allProducts);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])
    return(
        <Fragment>
            <div className="container">
                <h4>women's clothing</h4>
                <div className="home-content">
                    <SideNavigation toggle={toggle}/>
                    {womensClothing.products.length?(
                        <div className="boxes">
                        {womensClothing.products.map((item)=>
                            item.category === "women's clothing" ?(
                                <ProductBox key={item.id} item =  {item}/>
                            ): null
                            )}
                        </div>
                    ):<p>women's clothing is loading...</p>}
                </div>
            </div>
        </Fragment>
    )
}
export default Women;