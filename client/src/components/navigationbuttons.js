import React from 'react';
// import { Jumbotron, Container } from 'reactstrap';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import './component.css';


const NavButtons = (props) => {
    return (
        <div className="container">
            <div className="row">
            <div className="col-md-4 col-sm-4">
                    <button onClick={() => props.onOpenModal()} type="button" className="btn btn-outline-success nav-buttons">Signup / Login</button>
                </div>
                <div className="col-md-4 col-sm-4">
                    <button type="button" className="btn btn-outline-success nav-buttons">About</button>
                </div>
                <div className="col-md-4 col-sm-4">
                    <button type="button" className="btn btn-outline-success nav-buttons">Shopping Cart</button>
                </div>
                    
                
            </div>
        </div>

    );
};

export default NavButtons;



