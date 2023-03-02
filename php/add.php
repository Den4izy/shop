<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

// Read the incoming data from JSON request body
$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'];
$price = $data['price'];
$count = $data['count'];
$category = $data['category'];
$parameters = $data['parameters'];
$images = $data['images'];

// Connect to the database
$servername = "qwertyfour.zzz.com.ua";
$username = "denysyz";
$password = "Wiwelden132435";
$dbname = "qwertyfour";
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Insert the data into the ShopProducts table
$sql = "INSERT INTO ShopProducts (Name, Price, Count, Category, Parametres, images) VALUES ('$name', $price, $count, '$category', '$parameters', '$images')";

if ($conn->query($sql) === TRUE) {
  echo "New product added successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close(); 
?>