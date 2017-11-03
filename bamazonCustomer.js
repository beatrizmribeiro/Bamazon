var mysql = require("mysql");
var inquirer = require("inquirer");
var colors = require("colors");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "",
  database: "bamazon"
});


// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  initial();
});

function initial(){
  var query = "SELECT itemid, product_name, departament_name, price FROM products";
  // query the database for all items being auctioned
  connection.query(query, function(err, res) {

    //if (err) throw err;

    console.log("Welcome to bamazon!");
    console.log("-------------------------------------------------".red)
    console.log("Our products:".blue)
    for (var i = 0; i < res.length; i++) {
      console.log("Item ID: " + res[i].itemid + " || Product: " + res[i].product_name + " || Price: " + res[i].price);
    }
    start();
  });
}


function purchase(answers){

// Get the quantity for the ID
  var query = "SELECT itemid, price, stock_quantity FROM products WHERE itemid = " + answers['id'];
  var quantity = 0;

  // select the current quantity
  connection.query(query, function(err, res) {
  quantity = res[0]['stock_quantity']; //34
  
      // verify if there is enough
      if ( quantity < answers['amount']){ //AMOUNT IS 1
        console.log("Insufficient quantity! Try again!!!!".red);
        start();
      }else{
        // Update the database to new quantity
        var query = "UPDATE products SET stock_quantity = " + (quantity - answers['amount']) + " WHERE itemid = " + answers['id']; 
          connection.query(query, function(err, res2){
            if (err) throw err;
              console.log("-------------------------------------------------".red)
              console.log("Your order has been successfully placed. \n Your total is $ ".blue + ( res[0]['price'] * answers['amount']));
              console.log("-------------------------------------------------".red)
              console.log("Our quantity in stock after purchase:".red + quantity)
              start();
          });
        
      };
         
  }); 
            
}

function start(){
// once you have the items, prompt the user for which they'd like to bid on
     
     inquirer
       .prompt([
        {
          name:"id",
          type:"input",
          message: "What is the itemID of the product you would like to buy?".blue
        }, 
        {
          name:"amount",
          type: "input",
          message: "How many would you like to purchase?".blue
        }
      ]).then(purchase);

};