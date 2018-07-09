
const configureStripe = require('stripe');
import { REACT_APP_SK_LIVE, REACT_APP_SK_TEST } from '.env'

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? REACT_APP_SK_LIVE
    : REACT_APP_SK_TEST;

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
