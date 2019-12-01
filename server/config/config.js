//Puerto
process.env.PORT = process.env.PORT || 3000;

//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Vencimiento token
process.env.TOKEN_DUE_DATE = 60 * 60 * 24 * 30;

//Seed del token
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//DB
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafedb';
} else {
    urlDB = process.env.MONGO_URI;
}

//Google Client ID
process.env.CLIENT_ID = process.env.CLIENT_ID || '853080068091-vcur013geesu5mja9h3vtkj1li3qto8v.apps.googleusercontent.com';

process.env.URLDB = urlDB;