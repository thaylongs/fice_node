var express = require('express');
var app = express();
var path = require('path');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');


var page = process.argv.slice(2)[0];

app.render(page, { test: 'pepe' }, function(err, html){
    return console.log((err) ? err : html);
});
