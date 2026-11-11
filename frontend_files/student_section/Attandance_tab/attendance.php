<?php
session_start();

$host = "localhost";
$user = "root";
$pass = "mrvinayak@99k";
$db = "campusHub";
$mycon = mysqli_connect($host,$user, $pass, $db);

echo json_encode([
    "status" => "success",
    "profile_pic" =>$_SESSION['profile_pic'],
    "username"=>$_SESSION['name'],
    "year"=>$_SESSION['year'],
    "branch"=>$_SESSION['branch'],
    "course"=>$_SESSION['course']
]);

?>