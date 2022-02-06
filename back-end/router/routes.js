const express = require('express');
const router = express.Router();


const authFunc = require('../controllers/loginsignupController');
const profileController = require('../controllers/profileController')


// register page
router.post('/register', authFunc.register);
// Login route

router.post('/signin',authFunc.signin)


// PROFILE PAGE
router.get('/profile', profileController.profile)


module.exports = router;

router.post('/signin', authFunc.signin);




module.exports = router;