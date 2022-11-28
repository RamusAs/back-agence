module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9e91c4f8c8e9da765492fa00567f05e4'),
  },
});
