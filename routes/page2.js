const express = require('express');
const router = express.Router();
const db =require('../database/connect');

const {Page2Check,Page2Check2} =require('../middlewares/middlewares');

let sid =null;
let id =null;
//------------ Page 2 get Router------------//
router.get('/page2/:sid',Page2Check(["YES"]),Page2Check2(["YES"]),(req,res)=>{
    id =req.params.sid;
    if(id!='admin.jpg')
    {
        sid = id;
    }
    res.render("page2");
    console.log(`page2 sid is ${sid}`);
  })
  
  //----------Page 2 post Router---------------//
  router.post('/page2/:sid',(req,res)=>{
    let moa = req.body.mode;
    let branch = req.body.bran;
    let board10 = req.body.boa10;
    let yop10 = req.body.yop10;
    let percent10 = req.body.perc10;
    let board12 = req.body.boa12;
    let yop12 = req.body.yop12;
    let percent12 = req.body.perc12;
    console.log(moa,branch,board10,yop10,percent10,board12,yop12,percent12);
    let sql = `insert into academic_details values(${sid},'${moa}','${branch}','${board10}',${yop10},${percent10},'${board12}',${yop12},${percent12})`
    db.query(sql,(err,result)=>{
      if (err) throw err;
      console.log("Inserted succesfully");
    })
      res.redirect(`/page3/${sid}`)
  })

  
module.exports = router;