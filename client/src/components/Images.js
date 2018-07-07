import React from "react";
import "./component.css";

const Images = props => (
    // <div className="img-thumbnail col-4">
    //     <img alt={props.name} src={props.image} cost={props.cost}/>
    // </div>
    <div className="col mb-4">
        <div className="card">
            <img alt={props.name} src={props.image} cost={props.cost} description={props.description} className="card-image"/>
            <div className="card-body">
                <h4 className="card-title">{props.name}</h4>
                <p className="card-text">
                    {props.description}
                </p>
                <div className="cost-style mb-3">${props.cost} per dozen</div>
                <a href="#!" className="btn btn-primary add-to-shopping-cart-btn" onClick={() => props.addItemToCart(props.name, props.image, props.id)}>Add to Cart</a>
            </div>
        </div>
    </div>
);

export default Images;