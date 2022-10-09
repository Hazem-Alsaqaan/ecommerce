import React, { Fragment, useEffect } from "react";
import SideNavigation from "../side navigation/SideNavigation";
import { useDispatch, useSelector } from "react-redux"
import ProductBox from "../product_box/ProductBox";
import { fetchProducts } from "../../redux/action/fetchProducts";


const Electronics = ({toggle})=>{
    const  electronics = useSelector((state)=> state.allProducts);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])

    return(
        <Fragment>
            <div className="container">
                <h4>electronics</h4>
                <div className="home-content">
                    <SideNavigation toggle={toggle}/>
                    {electronics.products.length?(
                        <div className="boxes">
                        {electronics.products.map((item)=>
                            item.category === "electronics" ?(
                                <ProductBox key={item.id} item =  {item}/>
                            ): null
                            )}
                        </div>
                    ):<p>electronics is loading...</p>}
                </div>
            </div>
        </Fragment>
    )
}
export default Electronics