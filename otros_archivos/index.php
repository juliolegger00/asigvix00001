<?php
header('Access-Control-Allow-Origin', '*');
header('Access-Control-Allow-Methods',  'GET,PUT,POST,DELETE,PATCH,OPTIONS');
header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "http://192.168.102.73/?rest_route=/servicios/home/afiliados");
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Accept:application/json']);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$data = curl_exec($ch);
echo ($data);
exit();
?>
