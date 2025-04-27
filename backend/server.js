const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(cors({
  origin: 'http://localhost:4200'
}));
app.use(bodyParser.json());

const PORT = 3000;

// Login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const usuarios = JSON.parse(fs.readFileSync('./users.json'));
  const user = usuarios.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({ status: 'success', role: user.role });
  } else {
    res.status(401).json({ status: 'fail' });
  }
});

app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});


// Publicar blog
app.post('/publicar', (req, res) => {
  const post = req.body;
  const posts = JSON.parse(fs.readFileSync('posts.json'));
  posts.push(post);
  fs.writeFileSync('posts.json', JSON.stringify(posts, null, 2));
  res.json({ status: 'publicado' });
});

// Listar posts
app.get('/posts', (req, res) => {
  const posts = JSON.parse(fs.readFileSync('posts.json'));
  res.json(posts);
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
