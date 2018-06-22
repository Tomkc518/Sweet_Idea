import React from "react";

const Images = props => (
    <div className="img-thumbnail col-4">
        <img alt={props.name} src={props.image} cost={props.cost}/>
    </div>
);

export default Images;