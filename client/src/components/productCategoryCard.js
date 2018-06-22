import React from 'react';
// import ReactDOM from 'react-dom';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
import './component.css';
import './sweet-images/cupcake1.png';

const ProductCategoryCard = (props) => {
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-4 mb-4">
                    <div className="card ">
                        <img className="card-img-top" src="" alt="Card cap" />
                        <div className="card-body">
                            <h4 className="card-title">Decadent Cupcakes</h4>
                            <p className="card-text">
                                Some quick example text to build on the card title
                                and make up the bulk of the card's content.
                </p>
                            <a href="#!" className="btn btn-primary" >Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card ">
                        <img className="card-img-top" src="" alt="Card cap" />
                        <div className="card-body">
                            <h4 className="card-title">Delicious Cookies</h4>
                            <p className="card-text">
                                Some quick example text to build on the card title
                                and make up the bulk of the card's content.
                </p>
                            <a href="#!" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card ">
                        <img className="card-img-top" src="https://i.pinimg.com/originals/29/dd/10/29dd10c39826d06be93cfaf2f0099f58.jpg" alt="Card cap" />
                        <div className="card-body">
                            <h4 className="card-title">Poppable Cake Pops</h4>
                            <p className="card-text">
                                Some quick example text to build on the card title
                                and make up the bulk of the card's content.
                </p>
                            <a href="#!" className="btn btn-primary" onClick={() => props.onCategoryPops()}>Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCategoryCard;











