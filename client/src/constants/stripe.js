const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_dnDzNRnVhvOjUBIdqaxeg6rI'
  : 'pk_test_dnDzNRnVhvOjUBIdqaxeg6rI';

export default STRIPE_PUBLISHABLE;
