<?php 

    //接收一个参数
    $name = $_GET['name'];

    $arr = array(
        "name" => "jack",
        "age" => 16
    );

    echo json_encode($arr);