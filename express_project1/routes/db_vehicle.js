var express = require('express');
var router = express.Router();
var db_vehicle = require('../mongoose/database');

router.get('/', (req, res) => {
    db_vehicle.getAllVehicles((err, data) => {
        if (err)
            res.json({
                success: false,
                msg: err
            });
        else
            res.json({
                success: true,
                msg: data
            })
    })
})




router.post("/addVehicle", (req, res) => {
    if (!req.body.id || !req.body.temperature || !req.body.humidity)
        res.json({
            success: false,
            msg: 'incomplete data'
        });
    else {
        let car = {
            id: req.body.id,
            humidity: req.body.humidity,
            temperature: req.body.temperature
        }
        db_vehicle.addVehicle(car, (err) => {
            if (err)
                res.json({
                    success: false,
                    msg: err
                })
            else
                res.json({
                    success: true,
                    msg: 'added' + car
                })
        })
    }
})


router.post("/getVehicleById", (req, res) => {
    if (!req.body.id)
        res.json({
            success: false,
            msg: 'incomplete data'
        });
        
    else {
        let vehicle_id = {
            id: req.body.id
        }
        db_vehicle.getVehicleById(vehicle_id, (err,resData) => {
            if (err)
                res.json({
                    success: false,
                    msg: err
                })
            else
                res.json({
                    //success: true,
                    msg: resData
                    

                })
        })
    }
})

module.exports = router;