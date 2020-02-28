const client = require('../lib/db-client');

client.query(`
    DROP TABLE IF EXISTS profile;
    DROP TABLE IF EXISTS needs;
    DROP TABLE IF EXISTS wants;
`)
    .then(
        () => console.log('Drop Tables COMPLETE'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });