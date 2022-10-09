import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/action/fetchProducts";
import ProductBox from "../product_box/ProductBox";
import SideNavigation from "../side navigation/SideNavigation";

const Men =({toggle})=>{
    const  mensClothing = useSelector((state)=> state.allProducts);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])
    return(
        <Fragment>
            <div className="container">
                <h4>men's clothing</h4>
                <div className="home-content">
                    <SideNavigation toggle={toggle}/>
                    {mensClothing.products.length?(
                        <div className="boxes">
                        {mensClothing.products.map((item)=>
                            item.category === "men's clothing" ?(
                                <ProductBox key={item.id} item =  {item}/>
                            ): null
                            )}
                        </div>
                    ):<p>men's clothing is loading...</p>}
                </div>
            </div>
        </Fragment>
    )
}
export default Men;