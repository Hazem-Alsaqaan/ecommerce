import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/action/fetchProducts";
import ProductBox from "../product_box/ProductBox";
import SideNavigation from "../side navigation/SideNavigation";

const Jewelery = ({toggle})=>{
    const  jewelery = useSelector((state)=> state.allProducts);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])
    return(
        <Fragment>
            <div className="container">
                <h4>jewelery</h4>
                <div className="home-content">
                    <SideNavigation toggle={toggle}/>
                    {jewelery.products.length?(
                        <div className="boxes">
                        {jewelery.products.map((item)=>
                            item.category === "jewelery" ?(
                                <ProductBox key={item.id} item =  {item}/>
                            ): null
                            )}
                        </div>
                    ):<p>jewelery is loading...</p>}
                </div>
            </div>
        </Fragment>
    )
}
export default Jewelery;