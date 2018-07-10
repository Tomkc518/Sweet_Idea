// import { REACT_APP_PK_LIVE, REACT_APP_PK_TEST} from '../../env'


const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'xxxxxxxxxx'
  : 'xxxxxxxxxx'

export default STRIPE_PUBLISHABLE;
