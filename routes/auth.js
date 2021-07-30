const express = require('express');
const router = express.Router();

//------------ Importing Controllers ------------//
const authController = require('../controllers/authController')

//------------ Login Route ------------//
router.get('/stulogin', (req, res) => res.render('stulogin'));

//------------ Forgot Password Route ------------//
router.get('/forgotpassword', (req, res) => res.render('forgotpassword'));

//------------ Reset Password Route ------------//
router.get('/resetpasswored/:id', (req, res) => {
    // console.log(id)
    res.render('resetpassword', { id: req.params.id })
});

//------------ Signup Route ------------//
router.get('/signup', (req, res) => res.render('signup'));

//------------ Signup POST Handle ------------//
router.post('/signup', authController.registerHandle);

//------------ Email ACTIVATE Handle ------------//
router.get('/activate/:token', authController.activateHandle);


//------------ Forgot Password Post Handle ------------//
router.post('/forgotpassword', authController.forgotPassword);

//------------ Reset Password Handle(Redirecting to reset password) ------------//
router.get('/forgotpassword/:token', authController.gotoReset);

//------------ Reset Password Get Handle ------------//
router.get('/resetpassword/:id', (req, res) => res.render('resetpassword'));

//------------ Reset Password Handle ------------//
router.post('/resetpassword/:id', authController.resetPassword);

//------------ Login POST Handle ------------//
router.post('/stulogin', authController.loginHandle);

//------------ Logout GET Handle ------------//
router.get('/logout', authController.logoutHandle);

//------------ Admin login get Router ------------//
router.get('/adminlogin',(req,res)=> res.render("adminlogin"));


module.exports = router;