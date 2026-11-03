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