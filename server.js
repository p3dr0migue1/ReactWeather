var express = require('express');

// create a new app
var app = express();
var PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
})

app.use(express.static('public'));

// start the server
app.listen(PORT, function() {
    console.log('Express server is up on port ' + PORT);
});
