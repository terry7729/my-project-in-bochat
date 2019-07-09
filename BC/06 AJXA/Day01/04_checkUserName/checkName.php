<?php

    //如果get请求就用$_GET
    $username = $_GET['username'];

    //连接数据库
    $link = mysqli_connect('127.0.0.1','root','root','manage');

    //操作数据库
    $sql = "select *from user where name ='$username'";
    $result = mysqli_query($link,$sql);
    //转成数组
    $data = mysqli_fetch_all($result,1);

    //关闭数据库
    mysqli_close($link);

    //如果查到结果代表这个账号被注册了不能再使用，没查到结果代表可以使用
    if( count($data) > 0 ){
        //账号已存在

        echo '账号已存在，请重新输入！';
    }else{

        echo '恭喜，账号可以使用！';
    }