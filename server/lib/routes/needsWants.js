const express = require('express');
const client  = require('../db-client');
const Router  = express.Router;
const router  = Router();

router
    .get('/', (req, res) => {
        client.query(`
            SELECT Id, Profile_Id, Item_Id, Name
             FROM needs_wants
             WHERE profile_id = $1;
        `,
        [req.userId])
            .then(result => {
                res.json(result.rows);
            });
    });

module.exports = router;