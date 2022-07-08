// var weather = require('weather-js');

// weather.find({search: 'San Francisco, CA', degreeType: 'F'}, function(err, result) {
//     if(err) console.log(err);

//     console.log(JSON.stringify(result, null, 2));
//   });

const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: false }))
app.get('/', function (req, res) {
  // res.send('Hello World')
  // console.log('check');
})
app.post('/getuser', function (req, res) {
  var data = {
    'name': 'gunkaran singh',
    'email': 'gunkaran@gmail.com',
    'contact': 9876543210
  }
  
  res.json({ 'success': true, 'status': 200, 'data': data })
})


app.post('/adduser', function(req,res){
  // console.log(req.body)
  var data=req.body
  res.json({'success':true,'status':200,'data':data})
})
var studentroute=require('./routes/studentroutes')
app.use('/student',studentroute)
app.listen(3000)