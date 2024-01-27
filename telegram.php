<?php

$name                         = $_GET['name'];
$email                        = $_GET['email'];
$phone                        = $_GET['phone'];
$message                      = $_GET['message'];
$preferredCommunicationMethod = $_GET['preference'];

echo $name;
echo "nana";

$token   = "6443454962:AAHcyX8VTk93FIZHnUMalWYKjph-umg2rD0";
$chat_id = "-4032908777";
$arr = array(
  'Имя пользователя: '              => $name,
  'Электронная почта: '             => $email,
  'Номер телефона: '                => $phone,
  'Сообщение: '                     => $message,
  'Предпочтительный способ свзяи: ' => $preferredCommunicationMethod
);

foreach ($arr as $key => $value) {
  $txt .= "<b>".$key."</b>".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

?>