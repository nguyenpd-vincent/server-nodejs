var express = require('express');
var mysql = require('mysql');
var dotenv = require('dotenv');
var path = require('path')
var bodyParser = require('body-parser');
var pasport = require("passport")
    // var cookiePaser = require('cookie-parser')
const { JWTStrategy } = require('./services/jwt.service');

var cors = require('cors')

var app = express();
pasport.use(JWTStrategy);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(cors());
dotenv.config({ path: './.env' });
const PORT = 3001;

// const db = mysql.createConnection({
//     host: process.env.DATABASE_HOST,
//     user: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASSWORD,
//     database: process.env.DATABASE
// });

// const publicDirectory = path.join(__dirname, './public')
// app.use(express.static(publicDirectory))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(cookiePaser());
// db.connect((error) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log('Connected mysql')
//     }
// })


app.get('/', function(req, res) {
    // res.render('dashboard/index');
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/articles', require('./routes/article'));
app.use('/api/categories', require('./routes/category'));

app.listen(PORT, () => {
    console.log('Server running port ' + PORT);
});
module.exports = app;