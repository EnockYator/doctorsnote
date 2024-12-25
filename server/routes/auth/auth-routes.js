// by which route to call a controller
const express = require('express');
const { registerUser, loginUser } = require('./../../controllers/auth/auth-controller')

const router = express.Router();

//call registerUser controller when calling /register route with post
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;