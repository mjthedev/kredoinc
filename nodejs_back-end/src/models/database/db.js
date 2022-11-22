import mysql from 'mysql2';

const connection = mysql.createConnection({
    port: 3306,
    host: "127.0.0.1", 
    user: 'mjthedev',
    password: 'mysql',
    database: 'kredoinc'
});




export {connection}