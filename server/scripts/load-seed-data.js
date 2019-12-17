const client = require('../lib/db-client');

client.query(`
    INSERT INTO profile (Username, Password)
    VALUES ($1, $2)
    RETURNING Id;
`,
['user1', 'user1'])
    .then(result => {
        const profile = result.rows[0];
    })
    .then(
        () => console.log('Seed Data Load COMPLETE'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });