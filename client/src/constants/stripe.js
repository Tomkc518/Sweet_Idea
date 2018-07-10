require('dotenv').config();


const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  
?  'pk_live_JrYt2VT6MO6JMnXhEuxbkJQ3'
: 'pk_test_dnDzNRnVhvOjUBIdqaxeg6rI'


export default STRIPE_PUBLISHABLE;
