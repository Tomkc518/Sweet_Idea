import React from "react";

const ImageBody = props => (
    <div className="container">
      <div className="row">
        {props.children}
      </div>
    </div>
);

export default ImageBody;