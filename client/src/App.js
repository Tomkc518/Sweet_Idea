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
import Stripe from './components/Stripe';


//Authentication
import {
  getFromStorage,
  setInStorage,
} from './components/utils/storage';

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
    //Authenication
    isLoading: true,
    token: '',
    userName: '',
    signUpError: '',
    signInError: '',
    signInEmail: '',
    signInPassword: '',
    signUpFirstName: '',
    signUpLastName: '',
    signUpEmail: '',
    signUpPassword: ''
  };

  componentDidMount() {
    Modal.setAppElement('body');
    const obj = getFromStorage('sweet_idea_app');
    if (obj && obj.token && obj.userName) {
      const { token, userName } = obj;
      fetch('/api/account/verify?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token,
              userName,
              isLoading: false
            })
          } else {
            this.setState({
              isLoading: false
            })
          }
        })
    } else {
      this.setState({
        isLoading: false,
      })
    }
  };

  //Authentication form
  onTextboxChangeSignInEmail(event) {
    this.setState({
      signInEmail: event.target.value,
    });
  }

  onTextboxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value,
    });
  }

  onTextboxChangeSignUpFirstName(event) {
    this.setState({
      signUpFirstName: event.target.value,
    });
  }

  onTextboxChangeSignUpLastName(event) {
    this.setState({
      signUpLastName: event.target.value,
    });
  }

  onTextboxChangeSignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value,
    });
  }

  onTextboxChangeSignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value,
    });
  }

  onSignUp() {
    const {
      signUpFirstName,
      signUpLastName,
      signUpEmail,
      signUpPassword,
    } = this.state;

    this.setState({
      isLoading: true,
    })

    fetch('api/account/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: signUpFirstName,
        lastName: signUpLastName,
        email: signUpEmail,
        password: signUpPassword,
      }),
    }).then(res => res.json())
      .then(json => {
        if (json.success) {
          this.setState({
            signUpError: json.message,
            isLoading: false,
            signUpFirstName: '',
            signUpLastName: '',
            signUpEmail: '',
            signUpPassword: '',
          });
          this.onCloseModal();
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false,
          });
        }
      });
  }

  onSignIn() {
    const {
      signInEmail,
      signInPassword,
    } = this.state;

    this.setState({
      isLoading: true,
    })

    fetch('api/account/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    }).then(res => res.json())
      .then(json => {
        if (json.success) {
          setInStorage('sweet_idea_app', { token: json.token, userName: json.userName });
          this.setState({
            signInError: json.message,
            isLoading: false,
            token: json.token,
            userName: json.userName,
            signInEmail: '',
            signInPassword: '',
          });
          this.onCloseModal();
        } else {
          this.setState({
            signInError: json.message,
            isLoading: false,
          });
        }
      });
  }

  onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
  onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
  onTextboxChangeSignUpFirstName = this.onTextboxChangeSignUpFirstName.bind(this);
  onTextboxChangeSignUpLastName = this.onTextboxChangeSignUpLastName.bind(this);
  onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
  onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
  onSignIn = this.onSignIn.bind(this);
  onSignUp = this.onSignUp.bind(this);


  // shopping cart toggle 
  toggleSideBar = () => {
    console.log("toggled");
    document.getElementById('sidebar').classList.toggle('active');
  };

  // modal functions
  onOpenModal = () => {
    this.setState({ modalIsOpen: true });
  };

  onCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };

  // category selection functions
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

    const {
      isLoading,
      signInError,
      signUpError,
      signInEmail,
      signInPassword,
      signUpFirstName,
      signUpLastName,
      signUpEmail,
      signUpPassword,
      userName = this.state.userName
    } = this.state;

    if (isLoading) {
      return (<div><p>Loading...</p></div>);
    }

    return (
      <div className="App">

        {/* ----------------------- SHOPPING CART COMPONENT ----------------------- */}
        <div id="sidebar" className="">
          <div className="mt-4 shopping-cart-header">SHOPPING CART</div>
          <div className="shopping-cart-item pb-3">
            <span><img className='shopping-cart-image mr-4' src="https://www.deleukstetaartenshop.com/media/catalog/product/cache/2/image/200x180/08f5bd1ea19936551f6f0408f06686e9/p/a/pastel-kerst-koekjes_1.jpg" alt="some product"/>
            <span>Cookie Selected</span>
            <span>
            <form action="/action_page.php" className="quantity-selector">
              <select name="qunatity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </form>
            </span>
            </span>
          </div>
          <button type="button" className="btn btn-outline-light checkout-button" onClick={this.toggleSideBar}>CHECKOUT!</button>

          <Stripe />
        </div>

        {/* ----------------------- END OF SHOPPING CART COMPONENT ----------------------- */}
        <Header />
        <NavButtons onOpenModal={this.onOpenModal} userName={userName ? "Welcome, " + userName : "Signup / Login"} toggleSideBar={this.toggleSideBar} />

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
          contentLabel="Login/Signup Modal">


          <div className="flex-container mb-4">
            <h2>Login</h2>
            {
              (signInError) ? (
                <p>{signInError}</p>
              ) : (null)
            }
            <div className="modal-closure" onClick={this.onCloseModal}>x</div>
          </div>

          <form>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="someone@example.com" value={signInEmail} onChange={this.onTextboxChangeSignInEmail} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="enter your password here" value={signInPassword} onChange={this.onTextboxChangeSignInPassword} />
            </div>
            <button type="button" className="btn btn-primary mb-3" onClick={this.onSignIn}>Login</button>
          </form>
          <hr />


          <h2>Signup</h2>
          {
            (signUpError) ? (
              <p>{signUpError}</p>
            ) : (null)
          }
          <form>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" className="form-control" placeholder="enter your first name" value={signUpFirstName} onChange={this.onTextboxChangeSignUpFirstName} />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" className="form-control" placeholder="enter your last name" value={signUpLastName} onChange={this.onTextboxChangeSignUpLastName} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="someone@example.com" value={signUpEmail} onChange={this.onTextboxChangeSignUpEmail} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="enter your password here" value={signUpPassword} onChange={this.onTextboxChangeSignUpPassword} />
            </div>
            <button type="button" className="btn btn-primary mb-3" onClick={this.onSignUp}>Signup</button>
          </form>
        </Modal>

        <Footer />
      </div>
    );
  }
}

export default App;