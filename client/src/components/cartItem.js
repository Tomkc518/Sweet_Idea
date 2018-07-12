import React from "react";
import "./component.css";

const CartItem = props => (
    <div className="shopping-cart-item pb-3 mt-3">
        <span><img className='shopping-cart-image mr-4' src={props.image} alt={props.name} />
            <span>{props.name}</span>
            <span>
                <button className="m-2 increase-qty cart-btn" onClick={() => props.increaseQty(props.name)}>+</button>
                <button className="m-1 decrease-qty cart-btn" onClick={() => props.decreaseQty(props.name)}>-</button>
                <span>Qty: {props.quantity}</span>
            </span>
        </span>
    </div>

);

export default CartItem;






