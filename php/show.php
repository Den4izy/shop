<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

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

// Select all rows from the ShopProducts table
$sql = "SELECT * FROM ShopProducts ORDER BY Name DESC;";
$result = $conn->query($sql);

// Check if there are any rows
if ($result->num_rows > 0) {
  // Create an empty array to hold the data
  $data = array();

  // Loop through each row and add it to the data array
  while ($row = $result->fetch_assoc()) {
    $data[] = $row;
  }

  // Convert the data array to JSON and output it
  echo json_encode($data);
} else {
  // If there are no rows, output an empty JSON array
  echo json_encode(array());
}

$conn->close(); 
?>