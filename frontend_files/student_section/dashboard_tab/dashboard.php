<?php
session_start();

echo json_encode([
    "status" => "success",
    "profile_pic" =>$_SESSION['profile_pic'],
    "username"=>$_SESSION['name'],
    "year"=>$_SESSION['year'],
    "branch"=>$_SESSION['branch'],
    "course"=>$_SESSION['course']
]);
?>