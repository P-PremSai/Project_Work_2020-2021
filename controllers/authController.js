const passport = require('passport');
const bcryptjs = require('bcryptjs');
const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const jwt = require('jsonwebtoken');
const JWT_KEY = "jwtactive987";
const JWT_RESET_KEY = "jwtreset987";
var OAuth2 = google.auth.OAuth2;

var sid = null;

const CLIENT_ID ='159684542849-5l8dn76an3emarn9v0rk0j20n7umbvvp.apps.googleusercontent.com';
const CLIENT_SERET = '22dcrILErbnRYQ89zyA1RuVO';
const REDIRECT_URI ='https://developers.google.com/oauthplayground';
const REFRESH_TOKEN ='1//045nYL599LTyHCgYIARAAGAQSNwF-L9IrzkzkxjSeDL2ElxmJ9YWYHVimGVNf5dsSgG6tafvYO7FwbtF-uyQqfXT1BQ-vx4sJt7c';

//------------ User Model ------------//
const db =require('../database/connect.js');

//------------ Register Handle ------------//
exports.registerHandle = (req, res) => {
   const { first_name,last_name, email, password, confirm_password } = req.body;

    let errors = [];
    
    //------------ Checking required fields ------------//
    if(!first_name){
        errors.push({ msg: 'Please enter first name field' });
    }
    if(!last_name){
        errors.push({ msg: 'Please enter last name field' });
    }
    if(!password){
        errors.push({ msg: 'Please enter password field' });
    }
    if(!confirm_password){
        errors.push({ msg: 'Please enter confirm_password field' });
    }
    // if (!first_name || !last_name || !email || !password || !confirm_password) {
    //     errors.push({ msg: 'Please enter all fields' });
    // }

    //------------ Checking password mismatch ------------//
    if (password != confirm_password) {
        errors.push({ msg: 'Passwords do not match' });
    }

    //------------ Checking password length ------------//
    if (password.length < 10) {
        errors.push({ msg: 'Password must be at least 10 characters' });
    }
    
    
    if (errors.length > 0) {
        res.render('signup', {
            errors,
            first_name,
            last_name,
            email,
            password,
            confirm_password
        });
       
    } else {
        //------------ Validation passed ------------//
        let sql = `select * from signup where Email = '${email}'`
        db.query(sql, function (err, values) {
        if (err) throw err;
        
        //------------ User already exists ------------//
        if(Object.keys(values).length>0){
            console.log(values);
            errors.push({ msg: 'Email ID already registered' });
            res.render('signup', {
                errors,
                first_name,
                last_name,
                email,
                password,
                confirm_password
            });
        }
        else {

            const oauth2Client = new OAuth2(CLIENT_ID,CLIENT_SERET,REDIRECT_URI);


            oauth2Client.setCredentials({ refresh_token : REFRESH_TOKEN});
            const accessToken = oauth2Client.getAccessToken()

            const token = jwt.sign({ first_name,last_name, email, password }, JWT_KEY, { expiresIn: '30m' });
            const CLIENT_URL = 'http://' + req.headers.host;

            const output = `
            <h2>Please click on below link to activate your account</h2>
            <p>${CLIENT_URL}/auth/activate/${token}</p>
            <p><b>NOTE: </b> The above activation link expires in 30 minutes.</p>
            `;

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    type: "OAuth2",
                    user: "projectworkof2020.2021@gmail.com",
                    clientId: CLIENT_ID,
                    clientSecret: CLIENT_SERET,
                    refreshToken: REFRESH_TOKEN,
                    accessToken: accessToken
                },
            });
        
            // send mail with defined transport object
            const mailOptions = {
                from: '"Project Admin" <projectworkof2020.2021@gmail.com>', // sender address
                to: email, // list of receivers
                subject: "Account Verification: Collecting Student Details ✔", // Subject line
                generateTextFromHTML: true,
                html: output, // html body
            };
            
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    req.flash(
                        'error_msg',
                        'Something went wrong on our end. Please register again.'
                    );
                    res.redirect('/auth/stulogin');
                }
                else {
                    console.log('Mail sent : %s', info.response);
                    req.flash(
                        'success_msg',
                        'Activation link sent to email ID. Please activate to log in.'
                    );
                    res.redirect('/auth/stulogin');
                }
            })

        }
        });
    }
}       



//------------ Activate Account Handle ------------//
exports.activateHandle = (req, res) => {
    const token = req.params.token;
    let errors = [];
    if (token) {
        jwt.verify(token, JWT_KEY, (err, decodedToken) => {
            if (err) {
                req.flash(
                    'error_msg',
                    'Incorrect or expired link! Please register again.'
                );
                res.redirect('/auth/signup');
            }
            else {
                let { first_name,last_name, email, password } = decodedToken;

                let sql = `select * from signup where Email = '${email}'`
                db.query(sql, function (err, values) {
                    if (err) throw err;
                    //------------ User already exists ------------//
                    if(Object.keys(values).length>0){
                        req.flash(
                            'error_msg',
                            'Email ID already registered! Please log in.'
                        );
                        res.redirect('/auth/stulogin');
                    }
                    else{
                        bcryptjs.genSalt(10, (err, salt) => {
                            bcryptjs.hash(password, salt, (err, hash) => {
                                if (err) throw err;
                                password = hash;
                                let sql = `insert into student() values()`;
                                
                                db.query("SELECT student_id from student where student_id = (select max(student_id) from student);", function (err, value) {
                                    if (err) throw err;
                                    console.log(value);
                                    sid = value[0].student_id;
                                    sid+=1;
                                });
                                db.query(sql, function (err, values) {
                                    if (err) throw err;
                                    console.log(" sid ok");
                                    let sqli = `insert into signup values('${email}','${first_name}','${last_name}','${password}',${sid})`;
                                    db.query(sqli, function (err, result) {
                                        if (err) throw err;
                                        console.log("Signup insert ok");
                                        req.flash(
                                            'success_msg',
                                            'Account activated. You can now log in.'
                                        );
                                        console.log(email,password,first_name,last_name,);
                                    });
                                    res.redirect('/auth/stulogin');
                               })
                               
                            });
                        });
                    }
                });
            }
        });
    }
    else {
        console.log("Account activation error!")
    }
}
    
                
//------------ Forgot Password Post Handle ------------//
exports.forgotPassword = (req, res) => {
    const { email } = req.body;

    let errors = [];

    //------------ Checking required fields ------------//
    if (!email) {
        errors.push({ msg: 'Please enter an email ID' });
    }

    if (errors.length > 0) {
        res.render('forgotpassword', {
            errors,
            email
        });
    } else {
        //------------ Validation passed ------------//
        let sql = `select * from signup where Email = '${email}'`
        db.query(sql, function (err, values) {
        if (err) throw err;
        //------------ User does not exists ------------//
        if(Object.keys(values).length=0){
            errors.push({ msg: 'User with Email ID not exist!' });
            res.render('forgotpassword', {
                errors,
                email,
            });
        }
        else {

            const oauth2Client = new OAuth2(CLIENT_ID,CLIENT_SERET,REDIRECT_URI);

            oauth2Client.setCredentials({ refresh_token : REFRESH_TOKEN});

            const accessToken = oauth2Client.getAccessToken()

            const token = jwt.sign({ _id: values[0].student_id }, JWT_RESET_KEY, { expiresIn: '30m' });
            const CLIENT_URL = 'http://' + req.headers.host;
            const output = `
            <h2>Please click on below link to reset your account password</h2>
            <p>${CLIENT_URL}/auth/forgotpassword/${token}</p>
            <p><b>NOTE: </b> The activation link expires in 30 minutes.</p>
            `;
            
            let sql2 = `update resetlink set reset_link ='${token}' where Email = '${email}'`
            db.query(sql2, function (err, values) {
                if (err) {
                    errors.push({ msg: 'Error resetting password!' });
                    res.render('forgotpassword', {
                        errors,
                        email
                    });
                } else {
                    const transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            type: "OAuth2",
                            user: "projectworkof2020.2021@gmail.com",
                            clientId: CLIENT_ID,
                            clientSecret: CLIENT_SERET,
                            refreshToken: REFRESH_TOKEN,
                            accessToken: accessToken
                        },
                    });

                    // send mail with defined transport object
                    const mailOptions = {
                        from: '"Project Admin" <projectworkof2020.2021@gmail.com>', // sender address
                        to: email, // list of receivers
                        subject: "Account Password Reset: Collecting Student Details ✔", // Subject line
                        html: output, // html body
                    };

                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            console.log(error);
                            req.flash(
                                'error_msg',
                                'Something went wrong on our end. Please try again later.'
                            );
                            res.redirect('/auth/forgotpassword');
                        }
                        else {
                            console.log('Mail sent : %s', info.response);
                            req.flash(
                                'success_msg',
                                'Password reset link sent to email ID. Please follow the instructions.'
                            );
                            res.redirect('/auth/stulogin');
                        }
                    })
                }
            })

        }
        });
    }
}

//------------ Redirect to Reset Handle ------------//
exports.gotoReset = (req, res) => {
    const { token } = req.params;

    if (token) {
        jwt.verify(token, JWT_RESET_KEY, (err, decodedToken) => {
            if (err) {
                req.flash(
                    'error_msg',
                    'Incorrect or expired link! Please try again.'
                );
                res.redirect('/auth/stulogin');
            }
            else {
                const { _id } = decodedToken;
                let sql = `select * from signup where student_id = '${_id}'`
                db.query(sql, function (err, values) {
                    if (err) {
                        req.flash(
                            'error_msg',
                            'User with email ID does not exist! Please try again.'
                        );
                        res.redirect('/auth/stulogin');
                    }
                    else {
                        res.redirect(`/auth/resetpassword/${_id}`)
                    }
                });
            }
        })
    }
    else {
        console.log("Password reset error!")
    }
}


exports.resetPassword = (req, res) => {
    var { password, confirm_password } = req.body;
    const id = req.params.id;
    let errors = [];

    //------------ Checking required fields ------------//
    if (!password || !confirm_password) {
        req.flash(
            'error_msg',
            'Please enter all fields.'
        );
        res.redirect(`/auth/resetpassword/${id}`);
    }

    //------------ Checking password length ------------//
    else if (password.length < 10) {
        req.flash(
            'error_msg',
            'Password must be at least 10 characters.'
        );
        res.redirect(`/auth/resetpassword/${id}`);
    }

    //------------ Checking password mismatch ------------//
    else if (password != confirm_password) {
        req.flash(
            'error_msg',
            'Passwords do not match.'
        );
        res.redirect(`/auth/resetpassword/${id}`);
    }

    else {
        bcryptjs.genSalt(10, (err, salt) => {
            bcryptjs.hash(password, salt, (err, hash) => {
                if (err) throw err;
                password = hash;
                
                let sql = `update signup set password_ ='${password}' where student_id = '${id}'`
                db.query(sql, function (err, values) {
                    if (err) {
                        req.flash(
                            'error_msg',
                            'Error resetting password!'
                        );
                        res.redirect(`/auth/resetpassword/${id}`);
                    }
                    else {
                        req.flash(
                            'success_msg',
                            'Password reset successfully!'
                        );
                        res.redirect('/auth/stulogin');
                    }
                });
            });
        });
    }
}

//------------ Login Handle ------------//
exports.loginHandle = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/homepage',
        failureRedirect: '/auth/stulogin',
        failureFlash: true
    })(req, res, next);
}

//------------ Logout Handle ------------//
exports.logoutHandle = (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/auth/stulogin');
}




