<?php 

    // $arr = array(
    //     10,20,30,40,50
    // );


    $arr = array(
        "name" => "jack",
        "age" =>16
    );


    // $arr = array(
    //     array("name"=>"jack","age"=>16),
    //     array("name"=>"rose","age"=>19),
    //     array("name"=>"james","age"=>17)
    // );

    
    // 如果是这样写法，不管你叫什么名字，取到的都是值
    foreach( $arr as $value ):

        echo $value;
        echo "<br>";

    endforeach;


    // 如果的是索引型数组，那么key是下标，value是每个元素
    // 如果遍历的是关联型数组（对象）,那么key是键（属性名）,value是值（属性值）
    // foreach( $arr as $key => $value ):

    //     echo "key=$key ------- value=$value";
    //     echo "<br>";
        
    // endforeach;

