var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var request = require('request');
    request('https://ghibliapi.herokuapp.com/films', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // Begin accessing JSON data here
            // var data = JSON.parse(response)

            // data.forEach((movie) => {
            //     // Log each movie's title
            //     console.log(movie.title)
            // })
            var data = JSON.parse(body)
            var list = ""
            data.forEach((movie) => {
                // console.log(movie.title)
                list = list + "\n" + movie.title;
            })
            // console.log(body) // Print the google web page.
            console.log(list)
            res.send(body);
        }
    })
});

module.exports = router;