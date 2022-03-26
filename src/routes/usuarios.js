const express= require('express');
const xml2js=require('xml2js')
const router= express.Router();


const mysqlConnection=require('../database');

router.get('/',(req,res)=>{

    mysqlConnection.query('SELECT * FROM rolUsuario',(err,rows,fields)=>{

        if(!err){

            res.json(rows);
        }else{
            console.error(err);
        }

    })
});

router.post('/carga',(req,res)=>{
  //let entrada= JSON.stringify(req.body)
  const users=JSON.stringify(req.body)

  xml2js.parseString(users,{mergeAttrs:true},(err,result)=>{
      console.log(result)

  })
 //console.log(users)
 return "is"
  
})

router.post('/login',(req,res)=>{

  const msj={"status":0}
try {
  const {user,psw}=req.body
  console.log("user:",user)
  console.log("psw:",psw)

  mysqlConnection.query('SELECT * FROM usuarios WHERE  username=?',[user],(err,rows,fields)=>{

    if(!err){


      if(rows.length>0){
        res.json({"status":1,"obj":rows[0]})
      }else{
        res.json({"status":0})
      }

    }else{

      console.log(err)
    }
  })
  
 // 
  
} catch (error) {
  console.error(error);

}



});

module.exports=router;