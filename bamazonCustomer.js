require("dotenv").config();

var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: process.env.db_pw,
  database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    // console.log("connected as id " + connection.threadId);
    displayproduct();
    // inquiry()
});

function displayproduct() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.table(res);
        //   connection.end();
        inquiry();
    
    });
}

function inquiry() {
    inquirer.prompt([
        {
            type: "number",
            message: "What is the ID of the product you would like to purchase?",
            name: "firstquestion",
        },
        {
            type: "number",
            message: "How many units would you like to purchase?",
            name: "secondquestion",
        }
    ]).then(function (res) {
        console.log(res)
    })
}