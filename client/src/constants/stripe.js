import { REACT_APP_PK_LIVE, REACT_APP_PK_TEST} from '.env'


const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? REACT_APP_PK_LIVE
  : REACT_APP_PK_TEST;

export default STRIPE_PUBLISHABLE;
