const express = require('express');
const app = express();
const morgan = require('morgan');
const auth = require('./routes/auth');
const needsWants = require('./routes/needsWants');

app.use(morgan('dev'));
app.use(express.json());

const checkAuth = (req, res, next) => {
    const userId = req.get('Authorization');
    if(!userId) {
        res.status(401).json({ error: 'No authorization found' });
        return;
    }

    req.userId = userId;
    next();
}

app.use('/api/auth', auth);
app.use('/api/needsWants', checkAuth, auth);

module.exports = app;