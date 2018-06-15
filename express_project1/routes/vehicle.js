var express = require('express');
var router = express.Router();
var database= require('../mongoose/database')
var obj={
    "Name":"Tesla",
    "Model":"S",
    "Number":"MH-12 SA-9500",
    "Temp":27,
    "Humidity":94
}

/* GET users listing. */
router.get('/', function(req, res, next) {
    
  res.send(obj);
});

router.post('/',function(req,res){
    //console.log(JSON.stringify(req.body.number));
    if(req.body.number){       
        res.json(obj)
    }
    if(!req.body.number){
        
        res.json({
            success:false,
            msg:"send vehicle Number"
        })
    }
})

module.exports = router;
