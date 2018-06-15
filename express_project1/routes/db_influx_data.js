const influx = require('influxdb-nodejs');
const client = new influx('http://localhost:8086/vehicle_db');

const fieldschema = {
    humidity: Number,
    temperature: Number
};
const tagSchema = {
    id:String 
};
client.schema('temp_hum', fieldschema, tagSchema,{

});

// setInterval(function(){
//     client.write('temp_hum')
//     .tag({
//       // name: req.body.name,
//       id: "carid"
//     })
//     .field({
//       humidity: (Math.random()*100).toFixed(2),
//       temperature: (Math.random()*1000).toFixed(2)
//     })
//     .then(() => console.info('write point success'))
//     .catch(console.error);
// }, 1000*1);












