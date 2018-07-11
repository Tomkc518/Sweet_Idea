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
import CartItem from "./components/cartItem";
import Images from "./components/Images";
import Checkout from './Checkout';


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
    cart: [],
    qty: 0,
    cartTotal: 0,
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

  // Add to cart
  cartItems = [];
  itemName = [];
  // quantity = 0;
  //create func to map over items in array and call func after the push
  addItemToCart = (name, image, id, quantity) => {
    if (this.state.token !== '') {
      if (this.cartItems.length === 0) {
        this.cartItems.push({
          name: name,
          image: image,
          key: id,
          quantity: quantity
        });
        this.itemName.push(name);
        console.log(this.itemName);
      } else if (this.cartItems.length > 0) {
        if (this.itemName.indexOf(name) === -1) {
          this.cartItems.push({
            name: name,
            image: image,
            key: id,
            quantity: quantity
          });
          this.itemName.push(name);
          console.log(this.itemName);
        }
      }
      this.setState({ cart: this.cartItems });
      console.log(this.cartItems);
    } else {
      this.onOpenModal();
    }
  }

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
        'Accept': 'application/json'
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

  onLogout() {
    if (this.state.token === '') {
      this.onOpenModal();
    } else {
      const obj = getFromStorage('sweet_idea_app');
      if (obj && obj.token) {
        const { token } = obj;
        fetch('/api/account/logout?token=' + token)
          .then(res => res.json())
          .then(json => {
            if (json.success) {
              this.setState({
                token: '',
                userName: '',
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
    }
  };


  onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
  onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
  onTextboxChangeSignUpFirstName = this.onTextboxChangeSignUpFirstName.bind(this);
  onTextboxChangeSignUpLastName = this.onTextboxChangeSignUpLastName.bind(this);
  onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
  onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
  onSignIn = this.onSignIn.bind(this);
  onSignUp = this.onSignUp.bind(this);
  onLogout = this.onLogout.bind(this);


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

  total = 0;
  increaseQty = (name) => {
    for (var i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].name === name) {
        this.total++;
        let quantity = this.cartItems[i].quantity;
        quantity++;
        this.cartItems[i].quantity = quantity;
        this.setState({ cart: this.cartItems });
        this.setState({ cartTotal: this.total * 12 });
      }
    }
  }


  decreaseQty = (name) => {
    for (var i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].name === name) {
        if (this.total > 0) {
          this.total--;
          let quantity = this.cartItems[i].quantity;
          quantity--;
          this.cartItems[i].quantity = quantity;
          this.setState({ cart: this.cartItems });
          this.setState({ cartTotal: this.total * 12 });
        }

      }
    }
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
      userName
    } = this.state;

    if (isLoading) {
      return (<div><p>Loading...</p></div>);
    }

    return (
      // <StripeProvider apiKey="pk_test_dnDzNRnVhvOjUBIdqaxeg6rI">
      <div className="App">

        {/* ----------------------- SHOPPING CART COMPONENT ----------------------- */}
        <div id="sidebar" className="">
          {/* need to position and make x functional */}
          <div className="drawer-close" onClick={this.toggleSideBar}>x</div>
          <div className="mt-4 shopping-cart-header">SHOPPING CART</div>




          {this.state.cart.map(cart => (
            <CartItem
              increaseQty={this.increaseQty}
              decreaseQty={this.decreaseQty}
              name={cart.name}
              image={cart.image}
              src={cart.image}
              alt={cart.alt}
              key={cart.key}
              quantity={cart.quantity}
            />
          ))}




          <div className="shopping-cart-total">Total: {this.state.cartTotal}</div>
          <button type="button" className="btn btn-outline-light checkout-button" onClick={this.toggleSideBar}>CHECKOUT!</button>


          <Checkout
            name={'Submit Payment'}
            description={'Sweet Idea Confectionaries'}
            amount={1}
          />
        </div>


        {/* <Checkout
            name={'Submit Payment'}
            description={'Sweet Idea Confectionaries'}
            amount={1}
          />
        </div> */}

        {/* ----------------------- END OF SHOPPING CART COMPONENT ----------------------- */}


        <Header />
        <NavButtons onLogout={this.onLogout} userName={userName ? "Logout" : "Signup / Login"} toggleSideBar={this.toggleSideBar} />

        {/* I added cookies and cupcakes */}
        <ProductCategoryCard onCategoryPops={this.onCategoryPops} onCategoryCookies={this.onCategoryCookies} onCategoryCupcakes={this.onCategoryCupcakes} />
        <hr id="divider" className="mb-4" />
        <ImageBody>
          {this.state.products.map(products => (
            <Images
              addItemToCart={this.addItemToCart}
              id={products.id}
              key={products.id}
              name={products.name}
              image={products.image}
              cost={products.cost}
              description={products.description}
              quantity={products.quantity}
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
      // </StripeProvider>

    );
  }
}

export default App;