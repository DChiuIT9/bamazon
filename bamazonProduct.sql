CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    product_name VARCHAR(255),
    department_name VARCHAR(255),
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT NOT NULL);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lego MINI Cooper", "Toys", 170.90, 20),
    ("Dart Blaster", "Toys", 39.88, 17),
    ("Jenga", "Toys", 6.88, 45),
    ("Portable Speaker", "Electronics", 27.95, 38),
    ("B&O On-Ear Headphones", "Electronics", 399.99, 8),
    ("Fitbit Charge 3", "Electronics", 139.99, 25),
    ("Forza Horizon 4", "Video Games", 99.99, 20),
    ("Resident Evil 2", "Video Games", 37.56, 10),
    ("Animal Farm", "Books", 9.39, 35),
    ("Nike Backpack", "Clothing", 41.47, 18);
    
SELECT * FROM products;