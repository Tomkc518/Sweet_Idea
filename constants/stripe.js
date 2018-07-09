const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_live_o2b2rub1sWQFmWZmBEeAlzIE'
    : 'sk_test_nMZS9SqX05RYtdqlndv8OWGG';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
