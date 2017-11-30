if (process.env.NODE_ENV !== 'prod') {
  require('dotenv').config({ path: '.env' });
}
