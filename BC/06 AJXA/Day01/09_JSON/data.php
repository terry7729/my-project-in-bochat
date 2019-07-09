<?php 

    //假设这是从数据库读取出来的数据
    // $arr = array(
    //     "name" => "jack",
    //     "age" => 16
    // );

    //把PHP数据转成JSON字符串
    echo json_encode($arr);    
    

    //能不能把JSON字符串又转回PHP呢？
    $str = '{"name":"jack","age":16}';

    //转为PHP数据
    $arr = json_decode($str);

    var_dump($arr);