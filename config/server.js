module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 65332),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '819fb84b1adc976c3f5a07e5f01d16de'),
    },
  },
});
