<?php 

    $name = $_POST['name'];
    $age = $_POST['age'];

    $arr = array(
        "name" => $name,
        "age" => $age
    );

    // echo $age;
    echo json_encode($arr);


    // echo 'data.php';