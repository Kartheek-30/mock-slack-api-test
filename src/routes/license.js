const express = require('express');
const router = express.Router();
const licenseInfo = require('../data/license.json');

router.get('/license.info', (req, res) => {
    res.status(200).json({
        ok: true,
        license: licenseInfo
    });
});

module.exports = router;    