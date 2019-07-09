<?php 

    //接收别人提交的手机号
    $phone = $_REQUEST['phone']; //例：17620377763

    //开始算就行了
    // 参数1：要截取的字符串
    // 参数2：从哪个下标开始截
    // 参数3：截多少个长度，不写就代表截取到最后
    $end = substr($phone,7);
    
    //用除以80的结果减去整数部分
    $res = ceil(($end / 80 - floor($end / 80)) *80);
    //给它返回一段手机的结论评价就可以

    switch($res){

        case 1:
            echo "大展鸿图．可获成功　吉";
        break;
        case 2:
        echo "一盛一衰．劳而无功　凶";
        break;
        case 3:
        echo "蒸蒸日上．百事顺遂　吉";
        break;
        default:
            echo "不在三界中，跳出五行外";
            break;
    }
?>