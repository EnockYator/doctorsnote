// by which route to call a controller
const express = require('express');
const { registerCustomer, registerDoctor, registerAdmin, loginUser, logoutUser } = require('./../../controllers/auth/auth-controller')

const router = express.Router();

//call controllers
router.post('/register', registerCustomer);
router.post('/register-doctor', registerDoctor);
router.post('/register-admin', registerAdmin);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

module.exports = router;