import React from 'react';
import './component.css';

const Footer = (props) => {
    return (

        <footer className="footer">
            <div className="container">
                <div className="text-center">
                    <a href="https://twitter.com/BakeryIdea" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square pr-4 social-icons"></i></a>
                    <a href="https://www.instagram.com/sweetideabakery/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram pr-4 pl-4 social-icons"></i></a>
                    <a href="https://www.facebook.com/Sweet-Idea-Bakery-185583598805176/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square pl-4 social-icons"></i></a>
                </div>
            </div>
        </footer>

    );
};

export default Footer;