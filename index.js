const express = require('express');
const app = express();

app.use(express.static('public'));

app.set("views", "views");
app.set("view engine", "ejs");

const data = require('./data/markers.json');

app.get('/', function(req, res){
  res.render('home', {
    markers: data.locations
  });
});

// heroku poort instellingen
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'));
