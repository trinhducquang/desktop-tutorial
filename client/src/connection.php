<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, X-React-File-Name, X-File-Type");
header("Access-Control-Allow-Methods: OPTIONS,PATCH,DELETE,GET,POST");


$servername = 'localhost';
$username = 'root';
$password = '';
$database = 'project1_Luggage';

function createConnection()
{
    global $servername, $username, $password, $database;

    $conn = new mysqli($servername, $username, $password, $database);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    return $conn;
    
}

function closeConnection($conn)
{
    $conn->close();
}


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);    
    exit;
}