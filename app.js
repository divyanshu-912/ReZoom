const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({
  secret: 'resumeSecret',
  resave: false,
  saveUninitialized: true,
}));



const logo=[{id:"logo",name:"Logo",image:"/images/rezoomlogo.png"}]
const themes = [
  { id: "classic", name: "Classic", image: "/images/denverRed.png" },
  { id: "modern", name: "Modern", image: "/images/denverBlue.png" },
  { id: "classic", name: "Elegant", image: "/images/denverRed.png" },

  
 
];

app.get('/', (req, res) => res.render('home', { themes }));

app.get('/resume/form', (req, res) => {
  const selectedTheme = req.query.theme || 'modern';
  res.render('form', { theme: selectedTheme, themes });
});


const resumeRouter = require('./routes/resume');
app.use('/resume', resumeRouter);

app.listen(3000, () => console.log('Server running at http://localhost:3000'));