const FRONTEND_DEV_URLS = [ 'http://localhost:3000', 'http://localhost:3001/'];

const FRONTEND_PROD_URLS = [
  'https://www.sweet-idea.herokuapp.com/',
  'https://sweet-idea.herokuapp.com/',
  'https://sweet-idea.herokuapp.com/api/account/signup*',
  'https://sweet-idea.herokuapp.com/api/account/signin*',
  'https://sweet-idea.herokuapp.com/api/account/verify*',
  'https://sweet-idea.herokuapp.com/api/account/logout*',
];

module.exports = process.env.NODE_ENV === 'production'
  ? FRONTEND_PROD_URLS
  : FRONTEND_DEV_URLS;
