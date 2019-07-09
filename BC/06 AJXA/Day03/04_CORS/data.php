<?php 

    //因为这句话就相当于告诉浏览器说：我这个接口，所有人都可以访问，你不要保护我
    header('Access-Control-Allow-Origin:*');

    // 指定只有127.0.0.1可以访问我，你不用保护，但是其他网站你要保护我
    // header('Access-Control-Allow-Origin:http://127.0.0.1');


    echo 'ok';