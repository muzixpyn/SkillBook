<?php
require_once('/var/simplesamlphp/lib/_autoload.php');
$as = new \SimpleSAML\Auth\Simple('su-nidp');
$as->requireAuth();
$valid_saml_session = $as->isAuthenticated();
if($valid_saml_session){
    $attributes = $as->getAttributes();
    //echo "<pre>";print_r($as.suCitizenID);echo "</pre>";
    echo "<pre>";print_r($attributes);echo "</pre>";
    echo "<pre>";print_r($suGoogleID);echo "</pre>";
    // $account_name = $attributes['sAMAccountName'][0];
    // echo $attributes['sAMAccountName'][0];
    // echo $attributes['suPersonTypeID'][0];
    // if($attributes['suPersonTypeID'][0] == "faculty"){
    // }else if($attributes['suPersonTypeID'][0]=="ugrad"){
    //     // header("Location:/simplesaml/module.php/core/authenticate.php?as=su-nidp&logout");
    // }else{
    //     echo'<scrip type="text/javascript">';
    //     echo'alert("คุณไม่ได้อยูในสถานะที่มีสิทธิ์เข้าใช้งานได้"):';
    //     echo '</script>';
    //     header("Location:Login_index.php");
    // }
} else {
    die("Error");
}
?>
