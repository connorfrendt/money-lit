const client = require('../lib/db-client');

client.query(`
    DROP TABLE IF EXISTS needs_wants;
    DROP TABLE IF EXISTS profile;
`)
    .then(
        () => console.log('Drop Tables COMPLETE'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });