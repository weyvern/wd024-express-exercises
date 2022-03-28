const express = require('express');
const { resolve } = require('path');
const methodOverride = require('method-override');
const app = express();

const port = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.use(methodOverride('_method')); // middleware
app.use(express.urlencoded()); //middleware

app.get('/', (req, res) => res.sendFile(resolve('./views/home.html')));
app.put('/', (req, res) => res.sendFile(resolve('./views/home.html')));
app.delete('/', (req, res) => res.json({ good: 'yep' }));
app.get('/test-ejs', (req, res) => {
  const myTitle = 'Something else';
  const posts = [
    { id: 1, title: 'First post' },
    { id: 2, title: 'Second post' },
    { id: 3, title: 'Third post' }
  ];
  res.render('index', { myTitle, posts });
});

// Exercise 7
app.get('/register', (req, res) => res.sendFile(resolve('./views/register.html')));
app.post('/showPost', async (req, res) => {
  // Login user
  const {
    body: { name, lastName }
  } = req;
  res.send(`Welcome back ${name} ${lastName}`);
});

app.put('/override', (req, res) => res.send('Yay override'));

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
