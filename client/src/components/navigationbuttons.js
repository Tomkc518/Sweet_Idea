import React from 'react';
// import ReactDOM from 'react-dom';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
import './component.css';


const NavButtons = (props) => {
    return (
        <div className="container">
            <div className="row">
            <div className="col-md-4 col-sm-4">
                    <button onClick={() => props.onOpenModal()} type="button" className="btn btn-outline-light nav-buttons" active="none">{props.userName}</button>
                </div>
                <div className="col-md-4 col-sm-4">
                <a href="mailto:sweetideabakery@gmail.com">
                    <button type="button" className="btn btn-outline-light nav-buttons">Contact Us</button>
                </a>
                </div>
                <div className="col-md-4 col-sm-4">
                    <button onClick={() => props.toggleSideBar()} type="button" className="btn btn-outline-light nav-buttons">Shopping Cart</button>
                </div>
                    
                
            </div>
        </div>

    );
};

export default NavButtons;



