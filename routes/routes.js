const express = require('express');
const app = express();

app.get("/", (req, res) =>{
    res.send("Hi I am live ");
});


app.post("/check", (req, res) =>{
    console.log(req.body);
    const {lat1, lon1, lat2, lon2 } = req.body

    var R = 6378.137; // Radius of earth in KM
    var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
    var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    if (d*1000<=500){
        return res.status(200).json({msg:"in between 500m",distance_in_meters: d*1000});  // meters
    }
    else{
        return res.status(200).json({msg:"Over the range", distance_in_meters: d*1000}); 
    }
    

});

module.exports = app;
