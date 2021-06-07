require('dotenv').config();
const express = require('express');
const multer = require ('multer')
const app = express();
const cors = require('cors');
const apiRouter = require('./app/router');
app.use(express.urlencoded({ extended: true }));
const bodyParser = multer();
app.use(bodyParser.none());
const PORT = process.env.PORT || 5555;

app.use(cors({origin:"*"}));
// on prévient le serveur que certains requêtes auront un body en JSON
app.use(express.json());
app.use('/', apiRouter);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))