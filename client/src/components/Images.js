import React from "react";
import "./component.css";

const Images = props => (
    // <div className="img-thumbnail col-4">
    //     <img alt={props.name} src={props.image} cost={props.cost}/>
    // </div>
    <div className="col-4 mb-4">
        <div className="card">
            <img alt={props.name} src={props.image} cost={props.cost} className="card-image"/>
            <div className="card-body">
                <h4 className="card-title">{props.name}</h4>
                <p className="card-text">
                    Some quick example text to build on the card title
                    and make up the bulk of the card's content.
  </p>
                <a href="#!" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
);

export default Images;