<?php 

    //代表接收post提交过来的数据
    $userName = $_POST['userName'];

    //1.连接数据库
    $link = mysqli_connect('127.0.0.1','root','root','manage');

    //2.执行数据库
    $sql = "select *from user where name='$userName'";
    $result = mysqli_query($link,$sql);
    $data = mysqli_fetch_all($result,1);

    //3.关闭数据库
    mysqli_close($link);

    //4. 结果判断
    if(count($data) > 0){

        //就证明有这个用户名
        echo '账号已存在，请重新输入！';
    }else{

        echo '恭喜，账号可以使用！';
    }