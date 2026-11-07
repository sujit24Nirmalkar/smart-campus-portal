<?php
header('Content-Type: application/json');
session_start();
//databse connectivity;

$host = "localhost";
$userid = "root";
$apass = "mrvinayak@99k";
$db = "campusHub";

//userinfo 
$mycon =  mysqli_connect($host, $userid, $apass, $db);
if ($mycon->connect_error){
    echo json_encode(["status" => "error"]);

}
else {
    //checking raw data from logon.js 
    $jsonInput = file_get_contents('php://input');
    $data = json_decode($jsonInput, true);
    if (isset($data['uname']) && isset($data['pass'])){
        $username = $data['uname'];
        $userpass = $data['pass'];
    }
    else {
        $username = "";
        $userpass = "";
    }
    $sql = "select * from login_page where email = ?";
    $ps = $mycon->prepare($sql);
    $ps->bind_param("s",$username);
    $ps->execute();
    $result = $ps->get_result();
    if ($row = $result->fetch_assoc()){
        if($userpass === $row['password'] && $username === $row['email']){

            $_SESSION['profile_pic'] = $row['profile_pic'];
            $_SESSION['name']=$row['name'];
            $_SESSION['year']=$row['year'];
            $_SESSION['course']=$row['course'];
            $_SESSION['branch']=$row['branch'];
            $_SESSION['password']=$userpass;
            $_SESSION['is_logged']=true;
            echo json_encode(["status" => "success"]);
        }
        else {
            echo json_encode(["status" => "noUserFound"]);
        }
    }

    
}

?>