import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import './components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/header';
import NavButtons from './components/navigationbuttons';
import ProductCategoryCard from './components/productCategoryCard';
import Modal from 'react-modal';

// modal styles
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%'
  }
};

class App extends Component {

  state = {
    modalIsOpen: false
  };

  // modal functions
  onOpenModal = () => {
    this.setState({ modalIsOpen: true });
  };

  onCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };








  render() {
    return (
      <div className="App">
        <Header />
        <NavButtons />
        <ProductCategoryCard />


        <button onClick={this.onOpenModal}>Open Modal</button>

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
              <label for="formGroupExampleInput">Email</label>
              <input type="email" class="form-control" id="formGroupExampleInput" placeholder="someone@example.com" />
            </div>
            <div className="form-group">
              <label for="formGroupExampleInput2">Password</label>
              <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="enter your password here" />
            </div>
            <button type="button" class="btn btn-primary mb-3">Login</button>
          </form>
          <hr />


          <h2>Signup</h2>
          <form>
            <div className="form-group">
              <label for="formGroupExampleInput">First Name</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="enter your first name" />
            </div>
            <div className="form-group">
              <label for="formGroupExampleInput">Last Name</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="enter your last name" />
            </div>
            <div className="form-group">
              <label for="formGroupExampleInput">Email</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="someone@example.com" />
            </div>
            <div className="form-group">
              <label for="formGroupExampleInput2">Password</label>
              <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="enter your password here" />
            </div>
            <button type="button" class="btn btn-primary mb-3">Signup</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default App;
