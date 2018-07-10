
const configureStripe = require('stripe');
// import {} from '../env';

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
? 'xxxxxxxxxx'
: 'xxxxxxxxxx'

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
