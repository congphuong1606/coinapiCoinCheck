var express = require('express')
const axios = require('axios');
var cors = require('cors')
var app = express()
app.use(cors())

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))
app.get('/', function(req, res) {
  axios({
    method:'get',
    url:'https://coincheck.com/api/rate/btc_jpy'
  }).then(function (response) {
     res.send(response.data);
  })
  .catch(function (error) {
      console.log(error);
      isdone2=true;
  });
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})