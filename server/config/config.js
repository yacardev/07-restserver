//Puerto
process.env.PORT = process.env.PORT || 3000;

//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//DB
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafedb';
} else {
    urlDB = 'mongodb+srv://admin:J3lg6TQt5BmLjLpC@yacardev-3agn0.mongodb.net/cafedb';
}

process.env.URLDB = urlDB;