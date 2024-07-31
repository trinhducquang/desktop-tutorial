<?php
$hostname = 'localhost';
$username = 'root';
$password = '';

$conn = new mysqli($hostname, $username, $password);


if ($conn->connect_error) {
    die("Connection failed:" . $conn->connect_error);
}

$sql_str = "CREATE DATABASE IF NOT EXISTS project1_Luggage";

$result = $conn->query($sql_str);

if (!($result === TRUE)) {
    echo "Error creating database: " . $conn->error;
}

$conn->select_db("project1_Luggage");


// video
$sql = "CREATE TABLE IF NOT EXISTS videos (
    id int not null primary key AUTO_INCREMENT,
    name varchar(40) not null,
    type varchar(20) not null,
    link text not null
)";

$result = $conn->query($sql);

if (!($result === TRUE)) {
    echo "error creating table --video--: " . $conn->error;
}


//attributes
$sql = "CREATE TABLE IF NOT EXISTS attributes (
    id int not null primary key AUTO_INCREMENT,
    attribute_type  varchar(40) not null, -- e.g., 'color', 'size', 'brand', 'type'
    description text
)";

$result = $conn->query($sql);

if (!($result === TRUE)) {
    echo "error creating table --attributes--: " . $conn->error;
}


// //attribute category
// $sql = "CREATE TABLE IF NOT EXISTS attribute_categories  (
//     id int not null primary key AUTO_INCREMENT,
//     name varchar(40) not null,
//     description text
// )";

// $result = $conn->query($sql);

// if (!($result === TRUE)) {
//     echo "error creating table --attribute_categories--: " . $conn->error;
// }


//attribute value
$sql = "CREATE TABLE IF NOT EXISTS attribute_values (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    attribute_id  INT NOT NULL,
    value VARCHAR(40) NOT NULL,
    description TEXT,

    FOREIGN KEY (attribute_id ) REFERENCES attributes(id)
)";

$result = $conn->query($sql);

if (!($result === TRUE)) {
    echo "error creating table --attribute_values--: " . $conn->error;
}


//product
$sql = "CREATE TABLE IF NOT EXISTS products (
    id int not null primary key AUTO_INCREMENT,
    name varchar(40) not null,
    description text not null,
    gender varchar(10) not null, -- gentleman/ladies
    quantity int,
    image1 MEDIUMTEXT not null, 
    image2 MEDIUMTEXT not null, 
    price decimal(18,2) not null,
    rating int  -- (1-5) 
)";

$result = $conn->query($sql);

if (!($result === TRUE)) {
    echo "error creating table --products--: " . $conn->error;
}


// product attribute
$sql = "CREATE TABLE IF NOT EXISTS product_attri  (
    product_id INT NOT NULL,
    attribute_value_id  INT NOT NULL,
    PRIMARY KEY (product_id, attribute_value_id ),

    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    FOREIGN KEY (attribute_value_id) REFERENCES attribute_values(id) ON DELETE CASCADE
)";

$result = $conn->query($sql);

if (!($result === TRUE)) {
    echo "error creating table --product_attri--: " . $conn->error;
}


//user
$sql = "CREATE TABLE IF NOT EXISTS users (
    id int not null primary key AUTO_INCREMENT,
    name varchar(40) not null,
    password varchar(40) not null,
    email varchar(40) not null,
    phone varchar(40) not null,
    address varchar(100) not null,
    role varchar(20) not null
)";

$result = $conn->query($sql);

if (!($result === TRUE)) {
    echo "error creating table --users--: " . $conn->error;
}


//order
$sql = "CREATE TABLE IF NOT EXISTS orders (
    id int not null primary key AUTO_INCREMENT,
    user_id int not null,
    name varchar(40) not null,
    email varchar(40) not null,
    phone varchar(40) not null,
    address varchar(100) not null,
    order_date date not null,
    total_amount decimal(18,2) not null,
    
    foreign key (user_id) references users(id) -- ON DELETE CASCADE
)";

$result = $conn->query($sql);

if (!($result === TRUE)) {
    echo "error creating table --orders--: " . $conn->error;
}


//order
$sql = "CREATE TABLE IF NOT EXISTS order_detail (
    id int not null primary key AUTO_INCREMENT,
    order_id int not null,
    product_id int not null,
    price_product decimal(18,2) not null,
    quantity int not null,
    subtotal decimal(18,2) not null,

    foreign key (order_id) references orders(id) ,
    foreign key (product_id) references products(id) -- ON DELETE CASCADE
)";

$result = $conn->query($sql);

if (!($result === TRUE)) {
    echo "error creating table --order_detail--: " . $conn->error;
}


//rating
$sql = "CREATE TABLE IF NOT EXISTS ratings (
    id int not null primary key AUTO_INCREMENT,
    product_id int not null,
    user_id int not null,
    raing int, -- (1-5)
    
    foreign key (product_id) references products(id) ,
    foreign key (user_id) references users(id) -- ON DELETE CASCADE
)";

$result = $conn->query($sql);

if (!($result === TRUE)) {
    echo "error creating table --ratings--: " . $conn->error;
}


$conn->close();
