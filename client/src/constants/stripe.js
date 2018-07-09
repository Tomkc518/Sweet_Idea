const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_fcVEWSb208V00jHAyPdvPy5n'
  : 'pk_test_dnDzNRnVhvOjUBIdqaxeg6rI';

export default STRIPE_PUBLISHABLE;
