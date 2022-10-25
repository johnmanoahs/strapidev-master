// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', 'app-7d5beb07-b993-4d44-9fbd-6c17a527dc8b-do-user-11525350-0.b.db.ondigitalocean.com'),
//       port: env.int('DATABASE_PORT', 25060),
//       database: env('DATABASE_NAME', 'db'),
//       user: env('DATABASE_USERNAME', 'db'),
//       password: env('DATABASE_PASSWORD', 'AVNS_pFmZrOMrDf5XEci'),
//       schema: env('DATABASE_SCHEMA', 'public'), // Not required
//       ssl: {
//         rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
//       },
//     },
//     debug: false,
//   },
// });


module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT'),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
    debug: false,
  },
});
