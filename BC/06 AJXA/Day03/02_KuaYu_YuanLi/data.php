<?php

    // $arr = array(10,20,30,40,50);

    //你传给我什么函数名，我就调用什么函数
    $funcName = $_GET['callback'];//test

    echo  $funcName.'({"name":"jack","age":16})';
?>