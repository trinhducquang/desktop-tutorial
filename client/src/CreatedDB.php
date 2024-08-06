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

    FOREIGN KEY (attribute_id ) REFERENCES attributes(id) ON DELETE CASCADE
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
    -- image1 MEDIUMTEXT not null, 
    -- image2 MEDIUMTEXT not null, 
    link varchar(255),
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


// images
$sql = "CREATE TABLE IF NOT EXISTS images (
    id int not null primary key AUTO_INCREMENT,
    product_id int not null,
    image LONGBLOB not null,
    
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
)";

$result = $conn->query($sql);

if (!($result === TRUE)) {
    echo "error creating table --images--: " . $conn->error;
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






// Generic function to check if a record exists in a given table
function checkRecordExists($conn, $table, $columnValues)
{
    // Escape the column values
    foreach ($columnValues as $key => $value) {
        $columnValues[$key] = $conn->real_escape_string($value);
    }

    $title = $table['title'];

    // Create the WHERE clause
    $whereClauses = [];
    foreach ($columnValues as $column => $value) {
        $whereClauses[] = "$column = '$value'";
    }
    $whereClause = implode(' AND ', $whereClauses);

    // Prepare and execute the SQL query
    $sql = "SELECT COUNT(*) as count FROM $title WHERE $whereClause";
    $result = $conn->query($sql);

    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        return $row['count'] > 0;
    }

    return false;
}

// Generic function to insert data into a given table
function insertData($conn, $table, $columns, $data)
{
    // Escape the data
    foreach ($data as $key => $value) {
        $data[$key] = $conn->real_escape_string($value);
    }

    // Create the SQL query
    $columnsList = implode(', ', $columns);
    $valuesList = "'" . implode("', '", $data) . "'";
    $sql = "INSERT INTO $table ($columnsList) VALUES ($valuesList)";

    // Execute the query
    $result = $conn->query($sql);

    if ($result === TRUE) {
        echo "Inserted new data into $table table: " . implode(', ', $data) . "<br>";
    } else {
        echo "Error inserting data into $table table: " . $conn->error . "<br>";
    }
}

$tables = [
    [
        'title' => 'products',
        'columns' => [
            'name',
            'description',
            'gender',
            'quantity',
            // 'image1',
            // 'image2',
            'link',
            'price',
            'rating'
        ]
    ],
    [
        'title' => 'attributes',
        'columns' => [
            'attribute_type',
            'description'
        ]
    ],
    [
        'title' => 'attribute_values',
        'columns' => [
            'attribute_id',
            'value',
            'description'
        ]
    ],
    [
        'title' => 'product_attri',
        'columns' => [
            'product_id',
            'attribute_value_id'
        ]
    ],
    // [
    //     'title' => 'videos',
    //     'columns' => [
    //         'name',
    //         'type',
    //         'link'
    //     ]
    // ],
    [
        'title' => 'images',
        'columns' => [
            'product_id',
            'image'
        ]
    ]
];

// Example data to insert for each table
$dataToInsert = [
    'products' => [
        ['Selena', 'Black-tailed deer', 'ladies', 77, '', 235.23, 4],
        ['Yves', 'Vulture, turkey', 'ladies', 41, '', 552.13, 3],
        ['Benita', 'Woylie', 'ladies', 54, '', 794.18, 5],
        ['Corissa', 'Cormorant, javanese', 'ladies', 35, '', 448.5, 5],
        ['Elisabet', 'Common pheasant', 'gentlman', 70, '', 172.2, 2],
        ['Kermie', 'Grant\'s gazelle', 'ladies', 56, '', 760.53, 3],
        ['Olvan', 'Pie, rufous tree', 'gentlman', 23, '', 312.42, 1],
        ['Roze', 'Slender-billed cockatoo', 'ladies', 61, '', 437.34, 1],
        ['Leena', 'Australian sea lion', 'gentlman', 55, '', 643.43, 3],
        ['Bettine', 'Chipmunk, least', 'ladies', 53, '', 363.45, 1]
    ],
    'attributes' => [
        ['color', 'Color of the product'],
        ['size', 'Size of the product'],
        ['brand', 'Brand of the product'],
        ['type', 'Type of the product']
    ],
    'attribute_values' => [
        ['1', 'Red', 'Bright red color'],
        ['1', 'Blue', 'Bright blue color'],
        ['1', 'Green', 'Lush green color'],
        ['1', 'Black', 'Classic black color'],
        ['2', 'Small', 'Small size suitable for compact storage'],
        ['2', 'Medium', 'Medium size for moderate capacity'],
        ['2', 'Large', 'Large size for more storage'],
        ['3', 'Nike', 'Nike brand'],
        ['3', 'Adidas', 'Adidas brand'],
        ['3', 'Puma', 'Puma brand'],
        ['3', 'Under Armour', 'Under Armour brand'],
        ['3', 'Reebok', 'Reebok brand'],
        ['3', 'New Balance', 'New Balance brand'],
        ['4', 'Luggage', 'Luggage for travel'],
        ['4', 'Bags', 'Various types of bags'],
        ['4', 'Backpacks', 'Backpacks for carrying items']
    ],
    'product_attri' => [
        // Product 1
        ['1', '1'], // Red color
        ['1', '5'], // Small size
        ['1', '8'], // Nike brand
        ['1', '14'], // Luggage type

        // Product 2
        ['2', '1'], // Blue color
        ['2', '6'], // Medium size
        ['2', '9'], // Adidas brand
        ['2', '15'], // Bags type

        // Product 3
        ['3', '3'], // Green color
        ['3', '7'], // Large size
        ['3', '10'], // Puma brand
        ['3', '16'], // Backpacks type

        // Product 4
        ['4', '4'], // Black color
        ['4', '5'], // Small size
        ['4', '11'], // Under Armour brand
        ['4', '14'], // Luggage type

        // Product 5
        ['5', '1'], // Red color
        ['5', '6'], // Medium size
        ['5', '12'], // Reebok brand
        ['5', '15'], // Bags type

        // Product 6
        ['6', '2'], // Blue color
        ['6', '7'], // Large size
        ['6', '13'], // New Balance brand
        ['6', '16'], // Backpacks type

        // Product 7
        ['7', '3'], // Green color
        ['7', '5'], // Small size
        ['7', '8'], // Nike brand
        ['7', '15'], // Bags type

        // Product 8
        ['8', '4'], // Black color
        ['8', '6'], // Medium size
        ['8', '9'], // Adidas brand
        ['8', '14'], // Luggage type

        // Product 9
        ['9', '1'], // Red color
        ['9', '7'], // Large size
        ['9', '10'], // Puma brand
        ['9', '16'], // Backpacks type

        // Product 10
        ['10', '2'], // Blue color
        ['10', '5'], // Small size
        ['10', '11'], // Under Armour brand
        ['10', '14'] // Luggage type
    ],
    'images' => [
        ['1', 'http://dummyimage.com/114x100.png/cc0000/ffffff'],
        ['1', 'http://dummyimage.com/114x100.png/00cc00/ffffff'],
        ['2', 'http://dummyimage.com/114x100.png/0000cc/ffffff'],
        ['2', 'http://dummyimage.com/114x100.png/cc00cc/ffffff'],
        ['3', 'http://dummyimage.com/114x100.png/ffcc00/ffffff'],
        ['3', 'http://dummyimage.com/114x100.png/00cccc/ffffff'],
        ['4', 'http://dummyimage.com/114x100.png/ff0000/ffffff'],
        ['4', 'http://dummyimage.com/114x100.png/00ff00/ffffff'],
        ['5', 'http://dummyimage.com/114x100.png/0000ff/ffffff'],
        ['5', 'http://dummyimage.com/114x100.png/ff00ff/ffffff'],
        ['6', 'http://dummyimage.com/114x100.png/ffff00/ffffff'],
        ['6', 'http://dummyimage.com/114x100.png/00ffff/ffffff'],
        ['7', 'http://dummyimage.com/114x100.png/ff6600/ffffff'],
        ['7', 'http://dummyimage.com/114x100.png/6600ff/ffffff'],
        ['8', 'http://dummyimage.com/114x100.png/ff3333/ffffff'],
        ['8', 'http://dummyimage.com/114x100.png/33ff33/ffffff'],
        ['9', 'http://dummyimage.com/114x100.png/3333ff/ffffff'],
        ['9', 'http://dummyimage.com/114x100.png/ff33ff/ffffff'],
        ['10', 'http://dummyimage.com/114x100.png/ff9999/ffffff'],
        ['10', 'http://dummyimage.com/114x100.png/9999ff/ffffff']
    ]
];

foreach ($tables as $table) {
    $tableName = $table['title'];
    $columns = $table['columns'];
    $data = $dataToInsert[$tableName] ?? [];  // Get the data for the current table
    // var_dump($table['columns']) ;
    // var_dump( $data);

    foreach ($data as $dataRow) {
        if (count($dataRow) !== count($columns)) {
            echo "Error: Data row length does not match columns length for table $tableName. Skipping data row.<br>";
            continue;
        }
        $columnValues = array_combine($columns, $dataRow);

        if (!checkRecordExists($conn, $table, $columnValues)) {
            insertData($conn, $tableName, $columns, $dataRow);
        } else {
            echo "Data already exists in $tableName table: " . implode(', ', $dataRow) . ". Skipping insertion.<br>";
        }
    }
}


$conn->close();
