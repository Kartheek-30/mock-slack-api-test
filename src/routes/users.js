const express = require('express');
const router = express.Router();
const users = require('../data/users.json');

router.get('/list', (req, res) => {
    res.status(200).json({
        ok: true,
        members: users
    });
});

router.get('/info', (req, res) => {
    const userId = req.query.user_id;

    if(!userId) {
        return res.status(400).json({
            ok: false,
            error: "Missing user_id"
        });
    }

    const user = users.find(user => user.id === userId);

    if(!user) {
        return res.status(400).json({
            ok: false,
            error: "User not found"
        });
    }

    res.status(200).json({
        ok: true,
        user
    });
});

module.exports = router;