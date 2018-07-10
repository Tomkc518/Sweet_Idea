require('dotenv').config();

const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
? process.env.REACT_APP_SK_LIVE
: process.env.REACT_APP_SK_TEST


const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
