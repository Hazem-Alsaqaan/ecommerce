import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart, clearAllCaert } from "../../redux/reducers/cartSlice";
import "./Cart.css"

const Cart = ()=>{
    const carts = useSelector((state)=> state.cartSlice);
    const dispatch = useDispatch();

    const totalPrice = carts.reduce((acc, cart)=>{
        const onlyNum = cart.price;
        const price = (onlyNum * cart.quantity)
        return acc += price;
    },0);

    return(
        <Fragment>
            <div className="cart">
                <div className="container">
                    {carts.length ? (<div>
                                        <button className="btn btn-danger m-3 mh-25"
                                        onClick={()=>dispatch(clearAllCaert())}>Clear All</button>
                                        <span><b>Total Price :</b> {totalPrice.toFixed(2)} $</span>
                                </div>)
                                : ""
                            }
                    <div className="boxes-cart">
                        <table>
                            <thead>
                                <tr>
                                    <th className="title">title</th>
                                    <th className="rating">code</th>
                                    <th>quantity</th>
                                    <th>price</th>
                                    <th>image</th>
                                    <th>remove</th>
                                </tr>
                            </thead>
                                        {carts.map((cart)=>                                                
                                                <tbody key={cart.id}>
                                                    <tr>
                                                        <td className="title">{cart.title}</td>
                                                        <td className="rating">{cart.rating.count}</td>
                                                        <td>{cart.quantity}</td>
                                                        <td>{cart.price} $</td>
                                                        <td className="img-box-cart" >
                                                            <img src={cart.image} alt=""/>
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-danger p-1"
                                                            onClick={()=>dispatch(removeCart(cart))}>Remove</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            )}
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Cart;