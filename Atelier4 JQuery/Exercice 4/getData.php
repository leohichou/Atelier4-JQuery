<?php

header('Content-Type: application/json');

$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "mysql";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(array("error" => "Connection failed: " . $conn->connect_error)));
}

$type = $_GET['type'];
$id = isset($_GET['id']) ? intval($_GET['id']) : 0;

if ($type == "country") {
    $sql = "SELECT id, name FROM Country";
} elseif ($type == "state" && $id > 0) {
    $sql = "SELECT id, name FROM State WHERE country_id = $id";
} elseif ($type == "city" && $id > 0) {
    $sql = "SELECT id, name FROM City WHERE state_id = $id";
} else {
    echo json_encode(array("error" => "Invalid request"));
    exit;
}

$result = $conn->query($sql);

$data = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
} else {
    $data[] = array("id" => 0, "name" => "No results");
}

$conn->close();

echo json_encode($data);
?>
