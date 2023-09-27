// Import du paquet MySQL pour pouvoir l'utiliser ici
import mysql from "mysql"

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'restful_api'
});

connection.connect((err) => {
    if (err) throw err
    console.log('Ok !');
});