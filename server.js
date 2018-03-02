const express = require('express');
const hbs = require('hbs');

// ports - heroku and local
const port = process.env.PORT || 3000;

let app = express();

// view engine
app.set('view engine', 'hbs');

// hbs partials
hbs.registerPartials(__dirname + '/views/partials');

// uncomment in case of maintenance - middleware with no next-->does not continue
// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });

// directory
app.use(express.static(__dirname + '/public'));

// root - home page
app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page - Kotisivu'
  });
});

app.get('/chat', (req, res) => {
  res.render('chat.hbs', {
    pageTitle: "Chat - Chatti"
  });
});

app.get('/numberguesser', (req, res) => {
  res.render('numberguesser.hbs', {
    pageTitle: "Number Guesser - Numeronarvauspeli"
  });
});

app.get('/haikugenerator', (req, res) => {
  res.render('haikugenerator.hbs', {
    pageTitle: "Haiku Generator - Haikugeneraattori"
  });
});

app.listen(port, () => {
  console.log(`Server is up in port ${port}`)
});
