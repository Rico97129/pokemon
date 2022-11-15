//const//
const path = require("path");
const express = require ("express");
const bodyParser = require ("body-parser");
const app = express();

//Directory//
app.use(express.static(__dirname+'/public'));
// app.use("/accompagnement",express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(express.json());

//route//

app.use('/',require('./routes/home'));
//set//

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//port//

app.listen(4040);