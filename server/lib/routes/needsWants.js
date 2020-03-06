const express = require('express');
const client  = require('../db-client');
const Router  = express.Router;
const router  = Router();

router
    .get('/', (req, res) => {
        client.query(`
            SELECT *
             FROM needs_wants
             WHERE profile_id = $1;
        `,
        [req.userId])
            .then(result => {
                res.json(result.rows);
            });
    })

    .post('/', (req, res) => {
        const body = req.body;
        console.log('THIS IS THE BODY', body);
        client.query(`
            INSERT INTO needs_wants (Profile_Id, Item_Id, Name)
            VALUES ($1, $2, $3)
            RETURNING Id, Item_Id, Name;
        `,
        [req.userId, body.Item_Id, body.Name])
            .then(result => {
                console.log('*************////////', result);
                
            });
    })

module.exports = router;