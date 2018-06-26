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
                    <div className="card category-card-style">
                        <img className="card-img-top card-image" src="https://i.pinimg.com/236x/3a/0a/4d/3a0a4d96f6cfb0b9ac51e1699cabcc2f--simple-cupcakes-pink-cupcakes.jpg" alt="Card cap" />
                        <div className="card-body">
                            <h4 className="card-title">Decadent Cupcakes</h4>
                            <p className="card-text">
                                Your customers will want to indulge 
                                in these moist, crumbly cupcakes.

                </p>
                            <a href="#!" className="btn btn-primary" onClick={() => props.onCategoryCupcakes()}>Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card category-card-style">
                        <img className="card-img-top card-image" src="https://www.deleukstetaartenshop.com/media/catalog/product/cache/2/image/200x180/08f5bd1ea19936551f6f0408f06686e9/p/a/pastel-kerst-koekjes_1.jpg" alt="Card cap" />
                        <div className="card-body">
                            <h4 className="card-title">Delicious Cookies</h4>
                            <p className="card-text">
                                These cookies are perfect to go,
                                but some will want to enjoy in store, bite by bite.
                </p>
                            <a href="#!" className="btn btn-primary" onClick={() => props.onCategoryCookies()}>Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card category-card-style">
                        <img className="card-img-top card-image" src="https://i.pinimg.com/originals/29/dd/10/29dd10c39826d06be93cfaf2f0099f58.jpg" alt="Card cap" />
                        <div className="card-body">
                            <h4 className="card-title">Poppable Cake Pops</h4>
                            <p className="card-text">
                                All the flavor, none of the mess.
                                Customers with kids will thank you for it.
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











