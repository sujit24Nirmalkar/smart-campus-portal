<?php
session_start();
$host = "localhost";
$pass = "mrvinayak@99k";
$db = "campusHub";
$user = "root";


$mycon = mysqli_connect($host, $user, $pass, $db);
if ($mycon->connect_error){
    echo json_encode(["status" => "connectionNotEstablished"]);
}
else {

    //updating the user info 
    echo json_encode([
        "status"=>"success",
        "profile_pic" =>$_SESSION['profile_pic'],
        "username"=>$_SESSION['name'],
        "year"=>$_SESSION['year'],
        "branch"=>$_SESSION['branch'],
        "course"=>$_SESSION['course']
    ]);

    //reading input from javaScript
    $jsonInput = file_get_contents('php://input');
    $data = json_decode($jsonInput, true);

    if (isset($data['state']) && ($data['state'] === "yes")){
        $sql = 'insert into complaints (description, complaint_tag)
                values
                (?,?)';
        $ps=$mycon->prepare($sql);
        $ps->bind_param("ss",$data['description'],$data['catagory_id']);
        $ps->execute();
    }
$mycon->close();
}
?>