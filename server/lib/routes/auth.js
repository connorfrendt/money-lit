const router = require('express').Router();
const client = require('../db-client');

router
    .post('/signup', (req, res) => {
        const body = req.body;
        const username = body.username;
        const password = body.password;

        if(!username || !password) {
            res.status(400).json({ error: 'Username and Password required' });
            return;
        }

        client.query(`
            SELECT Id
             FROM profile
             WHERE Username = $1;
        `,
        [username])
            .then(result => {
                if(result.rows.length > 0) {
                    res.status(400).json({ error: 'Username already exists' });
                    return;
                }

                console.log('Creating new User Profile...');

                client.query(`
                    INSERT INTO profile (Username, Password)
                     VALUES ($1, $2)
                     RETURNING Id, Username;
                `,
                [username, password])
                    .then(results => {
                        res.json(result.rows[0]);
                    });
            });
    })

    .post('/signin', (req, res) => {
        const body = req.body;
        const username = body.username;
        const password = body.password;
        console.log(body, username, password);
        if(!username || !password) {
            res.status(400).json({ error: 'Username and password required' });
            return;
        }

        client.query(`
            SELECT Id, Username, Password
             FROM profile
             WHERE Username = $1;
        `,
        [username])
            .then(result => {
                if(result.rows.length === 0 || result.rows[0].password !== password) {
                    res.status(400).json({ error: 'Username or password incorrect' });
                    return;
                }
                
                res.json({
                    id: result.rows[0].id,
                    username: result.rows[0].username,
                });
            });
    });

module.exports = router;