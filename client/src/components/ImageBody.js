import React from "react";

// container for the images
const ImageBody = props => (
    <div className="container">
      <div className="row">
        {props.children}
      </div>
    </div>
);

export default ImageBody;