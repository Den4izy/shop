<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
// Параметри підключення до бази даних
$servername = "qwertyfour.zzz.com.ua";
$username = "denysyz";
$password = "Wiwelden132435";
$dbname = "qwertyfour";

// Підключення до бази даних
$conn = new mysqli($servername, $username, $password, $dbname);

// Перевірка з'єднання
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Запит до бази даних
$sql = "SELECT Id As id, Name AS title, images AS img, Category AS category, Parametres As parametres, Count AS count, Price AS price FROM ShopProducts";
$result = $conn->query($sql);

// Форматування результатів у формат JSON
$productArray = array();
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $productArray[] = $row;
  }
}
$productJson = json_encode($productArray);

// Повернення результату у відповідь на запит
header('Content-Type: application/json');
echo $productJson;

// Закриття з'єднання з базою даних
$conn->close();
?>