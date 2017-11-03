DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  itemid INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(50),
  departament_name VARCHAR(50),
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (itemid)
);


INSERT INTO products (product_name, departament_name, price, stock_quantity)
VALUES ("Origin - Dan Brown", "Books", 19.99, 100), 
("Corpse Bride", "DVD", 9.99, 50), 
("The Nightmare Before Christmas", "DVD", 14.99, 50),
("The Witcher", "Video Games", 44.80, 100), 
("Amazon Echo", "Home Audio Speaker", 99.99, 40), 
("Angels and Demons - Dan Brown", "Books", 15.99, 100),
("Home Alone", "DVD", 5.99, 44),
("Black T-shirt", "Men's Clothing", 44.90, 20),
("White Shirt", "Women's Clothing", 54.90, 40),
("Black Dress", "Women's Clothing", 109.99, 15),
("Black Pants", "Men's Clothing", 70.99, 28),
("Home Alone 2", "DVD", 9.99, 46);