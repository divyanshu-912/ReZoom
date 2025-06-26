const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));




const themes = [
  { id: "classic", name: "Classic", image: "/images/image.png" },
  { id: "modern", name: "Modern", image: "/images/image2.png" },
  { id: "elegant", name: "Elegant", image: "/images/image2.png" },
  { id: "professional", name: "Professional", image: "/images/image.png" },
  { id: "professional", name: "Professional", image: "/images/image2.png" },
  { id: "modern2", name: "Modern2", image: "/images/image2.png" },




  
 
];

app.get('/', (req, res) => res.render('home', { themes }));

app.get('/resume/form', (req, res) => {
  const selectedTheme = req.query.theme || 'classic';
  res.render('form', { theme: selectedTheme, themes });
});


app.listen(3000, () => console.log('Server running at http://localhost:3000'));