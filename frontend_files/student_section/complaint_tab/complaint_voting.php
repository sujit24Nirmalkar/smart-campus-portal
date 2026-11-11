<?php
session_start();

// database connection info 
$host = "localhost";
$userid = "root";
$pass = "mrvinayak@99k";
$db = "campusHub";

$mycon = mysqli_connect($host, $userid, $pass, $db);
if ($mycon->connect_error){
    echo json_encode(["connection" => "notEstablished"]);
}

else {

    $sql = "select * from complaints";
    $ps=$mycon->prepare($sql);
    $ps->execute();
    $records = $ps->get_result();
    $allcomplaints= $records->fetch_all(MYSQLI_ASSOC);

    echo json_encode([

        "status"=>"success",
        "profile_pic" =>$_SESSION['profile_pic'],
        "username"=>$_SESSION['name'],
        "year"=>$_SESSION['year'],
        "branch"=>$_SESSION['branch'],
        "course"=>$_SESSION['course'],
        "complaints"=>$allcomplaints
        
    ]);

}
?>