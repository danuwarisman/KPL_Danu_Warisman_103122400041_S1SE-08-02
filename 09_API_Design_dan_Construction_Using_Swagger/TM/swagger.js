const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Tebak Angka API',
      version: '1.0.0',
      description: 'API tebak angka acak berdasarkan nama pengguna',
    },
  },
  apis: ['index.js'],
};

const specs = swaggerJsdoc(options);

module.exports = {
  specs,
  swaggerUi,
};
