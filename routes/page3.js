const express = require('express');
const router = express.Router();
const db =require('../database/connect');

const {Page3Check1,Page3Check2} =require('../middlewares/middlewares');

let sid =null;
let id =null;

//------------ Page 3 get Router------------//
router.get('/page3/:sid',Page3Check1(["YES"]),Page3Check2(["YES"]),(req,res)=>{
    id =req.params.sid;
    if(id!='admin.jpg')
    {
        sid = id;
    }
    console.log(`page3 get sid is ${sid}`);
    res.render("page3")
  })
  
  
  //----------Page 3 post Router---------------//
  router.post('/page3/:sid',(req,res)=>{
  
    //---------------- insert details of father into family table --------------------------//
  
    let fname = req.body.fname;
    let fdob = req.body.fdob;
    let fqual = req.body.fqual;
    let focu = req.body.focc;
    let fmob = req.body.fmob;
    let femail = req.body.femail;
    console.log(fname,fdob,fqual,focu,fmob,femail);
    let sqlf = `insert into Family values (${sid},'Father','${fname}','${fdob}',${fmob},'${fqual}','${focu}','${femail}')`
    db.query(sqlf,(err,result)=>{
      if (err) throw err;
      console.log("Inserted into father");
    });
  
    //---------------- insert details of mother into family table ----------------//
  
    let mname = req.body.mname;
    let mdob = req.body.mdob;
    let mqual = req.body.mqual;
    let mocu = req.body.mocc;
    let mmob = req.body.mmob;
    let memail = req.body.memail;
    console.log(mname,mdob,mqual,mocu,mmob,memail);
    let sqlm = `insert into Family values (${sid},'Mother','${mname}','${fdob}',${mmob},'${mqual}','${mocu}','${memail}')`
    db.query(sqlm,(err,result)=>{
      if (err) throw err;
      console.log("Inserted into mother");
    });
    
  
    // insert Address
    let prlane = req.body.prlane;
    let prpost = req.body.prpost;
    let prcity = req.body.prcity;
    let prstate = req.body.prstate;
    let pelane = req.body.pelane;
    let pepost = req.body.pepost;
    let pecity = req.body.pecity;
    let pestate = req.body.pestate;
    console.log(prlane,prpost,prcity,prstate,pelane,pepost,pecity,pestate);
    let sqla = `insert into address values (${sid},'${prlane}',${prpost},'${prcity}','${prstate}','${pelane}',${pepost},'${pecity}','${pestate}')`
    db.query(sqla,(err,result)=>{
      if (err) throw err;
      console.log("Inserted into address");
      
    });
    res.redirect(`/success/${sid}`);
  })

  module.exports = router;