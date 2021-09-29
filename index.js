const express = require("express");
const path = require("path");

const app = express();

app.set('view engine', 'pug');
app.set('views',path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res) => {
    res.render('home')
})
app.get('/signup',(req,res) => {
    res.render('Signup')
})
app.get('/signin',(req,res) => {
    res.render('Signin')
})

app.listen(5000,() => {
    console.log('server is started');
})