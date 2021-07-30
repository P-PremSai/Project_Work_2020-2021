const express = require('express');
const router = express.Router();
const { ensureAuthenticated} = require('../config/checkAuth');
const db =require('../database/connect');
const passport = require('passport');

const {Authadmin,Authadminpass} =require('../middlewares/middlewares');
let sid =null;
let academic = null;
let father =null;
let mother = null;
let address =null;

//------------ Welcome Route ------------//
router.get('/', (req, res) => {
    res.render('start');
});

//-------------Home page Router-----------//
router.get('/homepage',ensureAuthenticated, (req,res) =>{
   sid = req.session.passport.user;
   console.log('homepage sid is ');
  console.log(sid);
  res.render("homepage");
})

//---------------- Middleware for register (it is here because we can't pass the sid to the midddlewares.js) ----------------//
const RegisterCheck =(permissions) => {
  return (req,res,next) => {
    let id =null;
      console.log(` page2check id is ${sid} ` );
      if(sid!='admin.jpg')
      {
          id = sid;
      }
      let RegisterCheck ="NO";
      console.log(`page2check sid is ${id}`);
      let sqlregister = `select per_state from Address where student_id = ${id};`
      db.query(sqlregister,(err,values)=>{
          if (err) throw err;
          if(Object.keys(values).length>0){
              console.log('values in sqlregister');
              console.log(values);
              RegisterCheck ="YES";
          }
          if(permissions.includes(RegisterCheck)){
              next()
          }else{

            res.redirect(`/success/${sid}`);
          }
          });
  }
};

//-------------- Register get Router -----------------//
router.get('/register',RegisterCheck(["NO"]),(req,res) => {
  console.log('in register get router');
  res.redirect('/page1');
})

//------------ Page 1 get Router------------//
router.get('/page1',ensureAuthenticated,(req,res)=>{
    res.render("page1");
    console.log('page1 sid is');
    console.log(sid);
    console.log(`This is the student id ${sid}`);
  });
  
//----------Page 1 post Router---------------//
router.post('/page1',(req,res)=>{
    let fname = req.body.fname;
    let lname = req.body.lname;
    let DOB = req.body.dob;
    let gender = req.body.gen;
    let mob_no = req.body.number;
    let email = req.body.email;
    let blood_group = req.body.blo;
    let country = req.body.contry;
    let religion = req.body.releg;
    let category = req.body.cate;
    let adhar = req.body.adhar;
    console.log(fname,lname,DOB,gender,mob_no,email,blood_group,
      country,religion,category,adhar);
      sql = `update student set FirstName = '${fname}',
                                LastName = '${lname}',
                                DOB = '${DOB}',
                                Gender = '${gender}',
                                mobile_no = ${mob_no},
                                Email = '${email}',
                                Nationality = '${country}',
                                blood_group = '${blood_group}',
                                relegion = '${religion}',
                                category = '${category}',
                                Adhar_no = ${adhar}
                                where student_id = ${sid};`

      let sqldelete = `delete from academic_details where student_id = ${sid};`
      db.query(sql,(err,result)=>{
        if (err) throw err;
        console.log("Inserted succesfully");
        db.query(sqldelete,(err,result)=>{
           if (err) throw err;
           console.log('deleted values if present previously in the database with the sid');
           console.log(sid);
        });
      })
    res.redirect(`page2/${sid}`);
  })








//------------- Admin login post Router -------------//
router.post('/adminlogin', (req,res) => {
  let email = req.body.email;
  let password = req.body.password;
  console.log(email,password);
  let sql = `select * from admin where email = '${email}' and password_ = '${password}'`
  db.query(sql, function (err, values) {
    if (err) throw err;
    if(Object.keys(values).length>0){
      console.log('admin loged in ');
      res.redirect(`/admin/${email}/${password}`)
    }
    else{
      req.flash(
          'error_msg',
          'Please check Email-ID and password!'
      );
      res.redirect('/auth/adminlogin');
    }
  });
});

//-------------- Admin pagebget Router ------------------//
router.get('/admin/:email/:password',Authadmin(["hod.cse@bmsce.ac.in"]),Authadminpass(["12345"]),(req,res)=>{
  let sql = `select s.FirstName,s.LastName,s.Email, s.student_id,a.branch from signup s, Academic_Details a where s.student_id = a.student_id order by s.student_id;`
  db.query(sql,(err,values)=>{
    if (err) throw err;
    res.render("admin",{items:values});
  });
})

//-------------- Admin page post Router ------------------//
router.post('/admin/:email/:password',(req,res)=>{
  let branch = req.body.branch;
  let year = req.body.year;
  console.log(year);
  console.log(branch);
  if (branch=="" && year==""){
    let sql = `select s.FirstName,s.LastName,s.Email, s.student_id,a.branch from signup s, Academic_Details a where s.student_id = a.student_id;`
    db.query(sql,(err,values)=>{
    if (err) throw err;
    res.render("admin",{items:values});
  });
  }
  else if(branch==""){
    year = year.slice(2,4);
    console.log(year);
    let sql = `select s.FirstName,s.LastName,s.Email, s.student_id,a.branch from signup s, Academic_Details a where s.student_id = a.student_id and s.Email like "%${year}%";`
    db.query(sql,(err,values)=>{
    if (err) throw err;
    res.render("admin",{items:values});
  });
  }
  else if(year==""){
    let sql = `select s.FirstName,s.LastName,s.Email, s.student_id,a.branch from signup s, Academic_Details a where s.student_id = a.student_id and a.branch='${branch}';`
    db.query(sql,(err,values)=>{
    if (err) throw err;
    res.render("admin",{items:values});
  });
  }
  else if(year!="" && branch!=""){
    year = year.slice(2,4);
    console.log(typeof year);
    console.log("debugging output");
    console.log(year);
    let sql = `select s.FirstName,s.LastName,s.Email, s.student_id,a.branch from signup s, Academic_Details a where s.student_id = a.student_id and (a.branch='${branch}' and s.email like "%${year}%");`
    db.query(sql,(err,values)=>{
    if (err) throw err;
    res.render("admin",{items:values});
  });
  }
})



//--------------  Admin Student Router ---------------//
router.get('/admstu',(req,res)=>{
  id = req.query.id;
  console.log(`required id = ${id}`);
  let sql1 = `select * from student where student_id = ${id};`
  let sql2 = `select * from Academic_Details where student_id = ${id};`
  let sql3 = `select * from Family where student_id = ${id} and Relationship = "Father";`
  let sql4 = `select * from Family where student_id = ${id} and Relationship = "Mother";`
  let sql5 = `select * from Address where student_id = ${id};`
  db.query(sql1,(err,values)=>{
    if (err) throw err;
    student = values;
  });
  db.query(sql2,(err,values)=>{
    if (err) throw err;
    academic = values;
  });
  db.query(sql3,(err,values)=>{
    if (err) throw err;
    father = values;
  });
  db.query(sql4,(err,values)=>{
    if (err) throw err;
    mother = values;
  });
  db.query(sql5,(err,values)=>{
    if (err) throw err;
    address = values;
    console.log(student);
    console.log(academic);
    console.log(father);
    console.log(mother);
    console.log(address);
    res.render("admstu",{student,academic,father,mother,address});
  });
})

 

module.exports = router;