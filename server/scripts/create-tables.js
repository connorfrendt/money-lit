const client = require('../lib/db-client');

client.query(`
    CREATE TABLE IF NOT EXISTS profile (
        Id SERIAL PRIMARY KEY,
        Username VARCHAR(255) NOT NULL,
        Password VARCHAR(255) NOT NULL
    );
`)
    .then(
        () => console.log('Create Tables COMPLETE'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });