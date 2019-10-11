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
            name: "item_id",
        },
        {
            type: "number",
            message: "How many units would you like to purchase?",
            name: "units",
        }
    ]).then(function(ans, err) {
        // if (err) throw err;
        if (isNaN(ans.item_id) || isNaN(ans.units)) {
            // return;
            connection.end();
            console.log("Incorrect input");
            return;
        }
        // console.log("Item ID: " + ans.item_id + "\n");
        connection.query("SELECT * FROM products", function(err, res) {
            if (err) throw err;
            if (ans.units > res[ans.item_id-1].stock_quantity) {
                console.log("Insufficient quantity!");
                return;
            }
            var total = parseFloat(res[ans.item_id-1].price) * parseFloat(ans.units);
            console.log("Item ID: " + ans.item_id +
                "\nProduct: " + res[ans.item_id-1].product_name +
                "\nCategory: " + res[ans.item_id-1].department_name +
                "\nIndividual Price: " + res[ans.item_id-1].price +
                "\nQuantity Purchased: " + ans.units +
                "\nTotal: " + total +
                "\nThank you!"
            );
        });
    })
}