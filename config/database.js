require('dotenv').config();

module.exports = {
  development: {
    host: 'localhost',
    port: 27017,
    database: 'myapp_dev',
    username: process.env.DB_USER || 'dev_user',
    password: process.env.DATABASE_PASSWORD
  },
  
  production: {
    host: process.env.DB_HOST || 'prod-db.example.com',
    port: process.env.DB_PORT || 27017,
    database: 'myapp_prod',
    username: 'admin',
    password: process.env.DATABASE_PASSWORD,
    // Connection string with embedded credentials
    uri: process.env.MONGODB_URI
  },
  
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379,
    password: process.env.REDIS_PASSWORD
  }
};
