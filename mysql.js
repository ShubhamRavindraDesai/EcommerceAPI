// let mysql = require('mysql');
// import {connection} from './app.js'

// let createTodos = `create table if not exists todos(
//     id int primary key auto_increment,
//     title varchar(255)not null,
//     completed tinyint(1) not null default 0
// )`;

// connection.query(createTodos, function(err, results, fields) {
// if (err) {
// console.log(err.message);
// }
// });

// connection.end(function(err) {
// if (err) {
// return console.log(err.message);
// }
// });