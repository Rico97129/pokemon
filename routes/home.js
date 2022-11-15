const express = require('express');
const routes = express.Router();
var pokemon= require('../controllers/pokemon');




routes.get('/', pokemon.allCarte);



module.exports=routes;