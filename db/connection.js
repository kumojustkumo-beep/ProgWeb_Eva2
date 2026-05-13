const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'iwuvcoliflower',
    database: 'eva2'
});

connection.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Base de datos conectada');
    }
});

module.exports = connection;