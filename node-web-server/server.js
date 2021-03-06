const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;

  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log('Cant append to server.log');
    }
  });
  next();
});

// app.use((req, res, next) => {
//   res.render('maintenance.hbs')
// })

app.use(express.static(__dirname + '/public')); //middleware executed in order called

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase()
});

// app.get('/', (req, res) => {
//   // res.send('<h1>Hello Express!</h1>');
//   res.send({
//     name: 'Brendan',
//     likes: [
//       'I Dont Like',
//       'Shit'
//     ]
//   });
// });

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Welcome Page',
    name: 'Brendan',
    likes: [
          'Milkshakes',
          ' Oreos'
        ]
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Error Handling Request'
  });
});

app.listen(port, () => {
  console.log(`Server is up on Port ${port}`);
});
