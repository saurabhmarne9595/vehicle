const mongo = require('mongoose');
//const Influx = require('influx');

const VehicleSchema = mongo.Schema({
    id: {
        type: String,
        required: true
    },
    humidity: {
        type: Number,
        required: true
    },
    temperature: {
        type: Number,
        required: true
    }
});

const Vehicle = module.exports = mongo.model('Vehicle', VehicleSchema);
module.exports.getAllVehicles = function (callback) {
    Vehicle.find(callback);
};

module.exports.addVehicle = function (vehicle, callback) {
    Vehicle.create(vehicle, callback);
};
module.exports.getVehicleById = function (vehicleID, callback) {
    Vehicle.find(vehicleID, callback)

    //Vehicle.findById(vehicleID, callback)
}





/*const influx = new Influx.InfluxDB({
    host: 'localhost',
    databse: 'vehicle_aggregation',
    Schema: [{
        measurement: 'car_data',
        fields: {
            id: Influx.FieldType.STRING,
            temperature: Influx.FieldType.INTEGER,
            humidity: Influx.FieldType.STRING
        },
        tags: [
            'host'
        ]
    }]
    })*/
/*
module.exports.getVehicleByDeviceID = function (vehicleID, callback) {
    let query = {
        vehicleID: vehicleID
    }
    Vehicle.find(query, callback)
}
*/