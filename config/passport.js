const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

const db =require('../database/connect');


module.exports = function (passport) {
    //------------------ used to serialize the user for the session --------------//
    passport.serializeUser(function(signup, done) {
		done(null, signup.student_id);
    });

    //------------------ used to deserialize the user -------------------------------//
    passport.deserializeUser(function(sid, done) {
		db.query("select * from signup where student_id = "+sid,function(err,values){	
			done(err, values);
		});
    });

    passport.use(
        new LocalStrategy({ usernameField: 'email' ,passwordField :'password'  }, (email, password, done) => {
            
            //------------ User Matching ------------//
            let sql1 = `select * from signup where Email = '${email}'`
            db.query(sql1, function (err, values) {
                if (err) throw err;
                if(Object.keys(values).length<=0){
                    return done(null, false, { message: 'This email ID is not registered' });
                }
                if(Object.keys(values).length>0){
                    let sid = values[0].student_id;
                    let passwordcheck =values[0].password_;

                    //------------ Password Matching ------------//
                    bcrypt.compare(password, passwordcheck, (err, isMatch) => {
                        if (err) throw err;
                        if (isMatch) {
                            return done(null, values[0]);
                        } else {
                            return done(null, false, { message: 'Password incorrect! Please try again.' });
                        }
                    });
                }
                else{
                    return done(null, false, { message: 'This email ID is not registered' });
                }   
            });
        })
    );
 
};