// DEPENDENCIES
const express    = require('express');
const mongoose   = require('mongoose');
const morgan     = require('morgan');
const app        = express();
const session    = require('express-session');
require('pretty-error').start();

// CONFIG
const PORT       = process.env.PORT || 3000;
const mongoURI   = process.env.MONGODB_URI || 'mongodb://localhost/journal'

// DB
mongoose.connect(mongoURI, { useMongoClient: true });
const db = mongoose.connection;
db.on('error', (err) => console.log('Mongo error: ', err));
db.on('connected', () => console.log('Mongo connected at: ', mongoURI));
db.on('disconnected', () => console.log('Mongo disconnected'));
mongoose.Promise = global.Promise;


// MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use(morgan('dev'));



// LISTEN
app.listen(PORT, () => console.log('BOOKS API running on port: ', PORT));
>>>>>>> 53369cb29d0832e93f389eeb2b9fba602220433a
