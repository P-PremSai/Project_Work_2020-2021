const express = require('express');
const router = express.Router();
const db =require('../database/connect');

const {Page3Check3} =require('../middlewares/middlewares');
let sid =null;
let id =null;

//--------------- Success page Router -----------------//
router.get('/success/:sid',Page3Check3(["YES"]),(req,res)=>{
    sid =req.params.sid;
    if(sid!='admin.jpg')
    {
        id = sid;
    }
    console.log(`sid in success ${id}`);

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
      res.render("success",{student,academic,father,mother,address});
    });
  })

  
module.exports = router;