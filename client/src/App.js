import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import './components';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/header';
import Footer from './components/footer';
import NavButtons from './components/navigationbuttons';
import ProductCategoryCard from './components/productCategoryCard';
import Modal from 'react-modal';
import pops from "./pops.json";
import cupcakes from "./cupcakes.json";
import cookies from "./cookies.json";
import ImageBody from "./components/ImageBody";
import Images from "./components/Images";



// modal styles
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    height: '75%',
    overflow: 'scroll'
  }
};

class App extends Component {

  state = {
    modalIsOpen: false,
    products: [],
    pops,
    cupcakes,
    cookies,
  };

  // modal functions
  onOpenModal = () => {
    this.setState({ modalIsOpen: true });
  };

  onCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };

  onCategoryPops = () => {
    this.setState({ products: this.state.pops });
  }
  onCategoryCupcakes = () => {
    this.setState({ products: this.state.cupcakes });
  }
  onCategoryCookies = () => {
    this.setState({ products: this.state.cookies });
  }








  render() {
    return (
      <div className="App">
        <Header />
        <NavButtons onOpenModal={this.onOpenModal} />

        {/* I added cookies and cupcakes */}
        <ProductCategoryCard onCategoryPops={this.onCategoryPops} onCategoryCookies={this.onCategoryCookies} onCategoryCupcakes={this.onCategoryCupcakes} />
        {/* <hr /> add some styling here */}
        <ImageBody>
          {this.state.products.map(products => (
            <Images
              id={products.id}
              key={products.id}
              name={products.name}
              image={products.image}
              cost={products.cost}
              description={products.description}
            />
          ))}
        </ImageBody>

        {/* <button onClick={this.onOpenModal}>Open Modal</button> */}

        {/* ----------------------- MODAL COMPONENT ----------------------- */}
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal">


          <div className="flex-container mb-4">
            <h2>Login</h2>
            <div className="modal-closure" onClick={this.onCloseModal}>x</div>
          </div>

          <form>
            <div className="form-group">
              <label >Email</label>
              <input type="email" className="form-control" placeholder="someone@example.com" />
            </div>
            <div className="form-group">
              <label >Password</label>
              <input type="password" className="form-control" placeholder="enter your password here" />
            </div>
            <button type="button" className="btn btn-primary mb-3">Login</button>
          </form>
          <hr />


          <h2>Signup</h2>
          <form>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="enter your first name" />
            </div>
            <div className="form-group">
              <label >Last Name</label>
              <input type="text" className="form-control" placeholder="enter your last name" />
            </div>
            <div className="form-group">
              <label >Email</label>
              <input type="text" className="form-control" placeholder="someone@example.com" />
            </div>
            <div className="form-group">
              <label >Password</label>
              <input type="password" className="form-control" placeholder="enter your password here" />
            </div>
            <button type="button" className="btn btn-primary mb-3">Signup</button>
          </form>
        </Modal>
        <Footer />
      </div>
    );
  }
}

export default App;

// cut for="formGroupExampleInput2" from each label
