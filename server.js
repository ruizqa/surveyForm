let express = require("express");
let path = require('path');
let app = express();
let dojos = ['Costa Rica', 'Ecuador', 'Mexico', 'Burbank']
let languages = ['Javascript', 'Python', 'Java', 'Ruby', 'Fortran']
let ninja;

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));


app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render("form", {'dojos': dojos, 'languages':languages});
})

app.post('/add', function(req, res) {
    ninja = req.body;
    res.redirect('/show')
})

app.get('/show', function(req, res) {
    res.render("result", {'user': ninja});
})

// tell the express app to listen on port 8000
app.listen(8080, function() {
 console.log("listening on port 8080");
});
