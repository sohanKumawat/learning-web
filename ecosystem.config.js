module.exports = {
  apps : [{
    name: "react-app",
    script: "./src/App.js",
    instances: 1,
      watch: true,
    env: {
      NODE_ENV: "dev",
      PORT: 3000
    },
    env_production : {
      NODE_ENV: "prod",
      PORT: 8080
    }
  }]
}

//pm2 start ecosystem.config.js --env prod
//pm2 start ecosystem.config.js --env dev