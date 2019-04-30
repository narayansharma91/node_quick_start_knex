// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: '127.0.0.1',
      password: 'ucreate',
      database: 'database_development_knex',
      user: 'postgres',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './app/knex/migrations',
    },
    seeds: {
      directory: './app/knex/seeders',
    },
  },

  testing: {
    client: 'postgresql',
    connection: {
      host: '127.0.0.1',
      database: 'database_test_knex',
      user: 'postgres',
      password: 'ucreate',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './app/knex/migrations',
    },
    seeds: {
      directory: './app/knex/seeders',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      host: '127.0.0.1',
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './app/knex/migrations',
    },
    seeds: {
      directory: './app/knex/seeders',
    },
  },
};
