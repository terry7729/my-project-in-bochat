<?php 

    //去数据库查数据，然后转成JSON给JS去用

    //1. 连接数据库
    $link = mysqli_connect('127.0.0.1','root','root','test');

    //2. 执行sql语句
    $sql = "select *from students";
    $result = mysqli_query($link,$sql);
    $data = mysqli_fetch_all($result,1);

    //3. 关闭数据库
    mysqli_close($link);

    //把数组转成JSON
    echo json_encode($data); 