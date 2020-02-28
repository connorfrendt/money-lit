const client = require('../lib/db-client');

client.query(`
    CREATE TABLE IF NOT EXISTS profile (
        Id SERIAL PRIMARY KEY,
        Username VARCHAR(255) NOT NULL,
        Password VARCHAR(255) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS needs (
        Id SERIAL PRIMARY KEY,
        Item_Id INTEGER,
        NAME VARCHAR(255) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS wants (
        Id SERIAL PRIMARY KEY,
        Item_Id INTEGER,
        NAME VARCHAR(255) NOT NULL
    );
`)
    .then(
        () => console.log('Create Tables COMPLETE'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });