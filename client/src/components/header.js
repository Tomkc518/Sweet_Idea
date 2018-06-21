import React from 'react';
// import { Jumbotron, Container } from 'reactstrap';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import './component.css';

const Header = (props) => {
    return (

        // <AppBar

        // />
        // <div>
        //     <h1 className="display-3">Fluid jumbotron</h1>
        //     <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>

        // </div>



        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-1">SWEET IDEA</h1>
            </div>
        </div>
            );
        };
        
export default Header;