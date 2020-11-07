var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)
    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)
        
        res.send(data);
      }
      // Send request
      request.send()
});

module.exports = router;