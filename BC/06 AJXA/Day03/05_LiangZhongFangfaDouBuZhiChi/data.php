<?php

    header('Content-type:text/html;charset=utf-8');

    //帮我们去访问接口
    // 相当于是给这个文本发一个请求，获取到响应体
    // $res = file_get_contents("1.txt");
    $res = file_get_contents("http://japi.juhe.cn/qqevaluate/qq?key=8d9160d4a96f2a6b5316de5b9d14d09d&qq=10000");

    echo $res;

    //拿到结果后，我再自己输出给我的浏览器