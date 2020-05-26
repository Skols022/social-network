const express = require('express');

const UserControllser = require('../controllers/user')

const router = express.Router();

router.post('/signup', UserControllser.createUser);

router.post('/login', UserControllser.userLogin);

module.exports = router;

