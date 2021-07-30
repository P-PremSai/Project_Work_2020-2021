const db =require('../database/connect');

let id =null;
let sid =null;


const Authadmin = (permissions) => {
    return (req,res,next) => {
        const email =req.params.email;
        const password = req.params.password;
        if(permissions.includes(email)){
            next()
        }else{
            req.flash(
                'error_msg',
                'Please Log in first! from admin email'
            );
            res.redirect(`/auth/adminlogin`);
        }
    }
};

const Authadminpass =(permissions) => {
    return (req,res,next) => {
        const password = req.params.password;
        if(permissions.includes(password)){
            next()
        }else{
            req.flash(
                'error_msg',
                'Please Log in first! from admin password'
            );
            res.redirect(`/auth/adminlogin`);
        }
    }
};


//------------- For going into the page2 we are checking whether the aadhar number in page1 is present or not(if present we will allow to page2)---------//
const Page2Check =(permissions) => {
    return (req,res,next) => {
        id =req.params.sid;
        console.log(` page2check id is ${id} ` );
        //---- All middlewares are called twice one is app.use and the other is app.get(router.get)--------//
        //------During the second time call it takes the id as admin.jpg, So I did the below thing not to take the id as admin.jpg ----------//
        if(id!='admin.jpg')
        {
            sid = id;
        }
        
        let aadharCheck ="NO";
        console.log(`page2check sid is ${sid}`);
        let sqlaadhar = `select Adhar_no from student where student_id = ${sid};`
        db.query(sqlaadhar,(err,values)=>{
            if (err) throw err;
            if(Object.keys(values).length>0){
                console.log('values in sqlaadhar');
                console.log(values);
                aadharCheck ="YES";
            }
            if(permissions.includes(aadharCheck)){
                next()
            }else{
                req.flash(
                    'error_msg',
                    'Please Log in first! from page2 aadhar check'
                );
                res.redirect(`/auth/stulogin`);
            }
            });
    }
};

const Page2Check2 =(permissions) => {
    return (req,res,next) => {
        id =req.params.sid;
        console.log(` page2check2 id is ${id} ` );
        if(id!='admin.jpg')
        {
            sid = id;
        }
        let MOACheck ="YES";
        console.log(`page2check2 sid is ${sid}`);
        
        let sqlMOA = `select MOA from Academic_Details where student_id = ${sid};`
        db.query(sqlMOA,(err,values)=>{
            if (err) throw err;
            if(Object.keys(values).length>0){
                console.log('values in sqlMOA');
                console.log(values);
                MOACheck ="NO";
            }
            if(permissions.includes(MOACheck)){
                next()
            }else{
                req.flash(
                    'error_msg',
                    'Please Log in first! from page2 MOA check'
                );
                res.redirect(`/auth/stulogin`);
            }
            });
    }
};

const Page3Check1 =(permissions) => {
    return (req,res,next) => {
        id =req.params.sid;
        console.log(` page3check1 id is ${id} ` );
        if(id!='admin.jpg')
        {
            sid = id;
        }
        let c12_perecentageCheck ="NO";
        console.log(`page3check1 sid is ${sid}`);
        let sqlc12_perecentage = `select c12_perecentage from Academic_Details where student_id = ${sid};`
        db.query(sqlc12_perecentage,(err,values)=>{
            if (err) throw err;
            if(Object.keys(values).length>0){
                console.log('values in sqlc12_perecentage');
                console.log(values);
                c12_perecentageCheck ="YES";
            }
            if(permissions.includes(c12_perecentageCheck)){
                next()
            }else{
                req.flash(
                    'error_msg',
                    'Please Log in first! from page2 c12_perecentage check'
                );
                res.redirect(`/auth/stulogin`);
            }
            });
    }
};

const Page3Check2 =(permissions) => {
    return (req,res,next) => {
        id =req.params.sid;
        console.log(` page3check2 id is ${id} ` );
        if(id!='admin.jpg')
        {
            sid = id;
        }
        let RelationshipCheck ="YES";
        console.log(`page3check2 sid is ${sid}`);
        let sqlRelationship = `select Relationship from Family where student_id = ${sid};`
        db.query(sqlRelationship,(err,values)=>{
            if (err) throw err;
            if(Object.keys(values).length>0){
                console.log('values in sqlRelationship');
                console.log(values);
                RelationshipCheck ="NO";
            }
            if(permissions.includes(RelationshipCheck)){
                next()
            }else{
                req.flash(
                    'error_msg',
                    'Please Log in first! from page3 Relationship Check'
                );
                res.redirect(`/auth/stulogin`);
            }
            });
    }
};

const Page3Check3 =(permissions) => {
    return (req,res,next) => {
        id =req.params.sid;
        console.log(` page3check3 id is ${id} ` );
        if(id!='admin.jpg')
        {
            sid = id;
        }
        let per_stateCheck ="NO";
        console.log(`page3check3 sid is ${sid}`);
        let sqlperState = `select per_state from Address where student_id = ${sid};`
        db.query(sqlperState,(err,values)=>{
            if (err) throw err;
            if(Object.keys(values).length>0){
                console.log('values in sqlperState');
                console.log(values);
                per_stateCheck ="YES";
            }
            if(permissions.includes(per_stateCheck)){
                next()
            }else{
                req.flash(
                    'error_msg',
                    'Please Log in first! from page3 per_state Check'
                );
                res.redirect(`/auth/stulogin`);
            }
            });
    }
};



module.exports ={Authadmin,Authadminpass,Page2Check,Page2Check2,Page3Check1,Page3Check2,Page3Check3};