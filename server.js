var express = require("express");

var app = express();

app.use(express.static('public'));

app.get('/:timestamp',function(req, res){
    var timestamp = req.params.timestamp;
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    
    if(!isNaN(parseInt(timestamp))){
        timestamp = parseInt(timestamp);
    }
    var date = new Date(timestamp);
    
    if(date.getTime() > 0){
        return(res.status(200).json({
            unix: date.getTime(),
            natural: months[date.getMonth()] + ' ' + date.getDate() + ' , ' + date.getFullYear()
        }));
    } else {
        return(res.status(200).json({
            unix: null,
            natural: null
        }))
    }
});

app.listen(process.env.PORT || 3000, function(){
    console.log('App started on port '+process.env.PORT);
});
