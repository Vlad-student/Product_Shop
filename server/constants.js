require('dotenv').config();

const CONSTANTS = {
  DB_HOST: '127.0.0.1',
  DB_PORT: '27017',
  DB_NAME: 'shop',
  USER_ROLES: ['customer', 'admin'],
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES: '7d',
  MAX_LIMIT_IMG: 3,
  UPLOAD_FOLDER: 'uploads/',
  UPLOAD_IMG_TYPES: ['.jpg', '.jpeg', '.png', '.webp'],
  AMOUNT: 50,
  SHIPPING_METHOD: ['free', 'nova post', 'ukr post'],
  ORDER_STATUS: ['new', 'paid', 'confirm', 'shipped', 'delivered', 'canceled'],
  // Stripe TEST key — for demo purposes only
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  CLIENT_URL: 'http://localhost:5173',
};

module.exports = CONSTANTS;
