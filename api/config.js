require('dotenv').config()

const config = {
  botToken: process.env.BOT_TOKEN,
  appPort: process.env.APP_PORT || 3000,
  isDevelopment: process.env.NODE_ENV === 'dev',
  currentHost: process.env.APP_HOST
}

module.exports = {
  config
}
