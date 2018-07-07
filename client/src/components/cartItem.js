import React from "react";
import "./component.css";

const CartItem = props => (
    <div className="shopping-cart-item pb-3">
        <span><img className='shopping-cart-image mr-4' src={props.image} alt={props.name} />
            <span>{props.name}</span>
            <span>
                <form action="/action_page.php" className="quantity-selector">
                    <select name="qunatity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                </form>
            </span>
        </span>
    </div>

);

export default CartItem;






