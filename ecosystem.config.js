module.exports = {
  apps: [
    {
      // Nombre con el que PM2 mostrará la app
      name: "strapi",
      cwd: __dirname,
      // Arranca con npm start
      script: "npm",
      args: "start",
      // Variables de entorno para producción
      env_production: {
        NODE_ENV: "production",
        APP_KEYS: process.env.APP_KEYS,
        API_TOKEN_SALT: process.env.API_TOKEN_SALT,
        ADMIN_JWT_SECRET: process.env.ADMIN_JWT_SECRET,
        TRANSFER_TOKEN_SALT: process.env.TRANSFER_TOKEN_SALT,
      },
    },
  ],
};
