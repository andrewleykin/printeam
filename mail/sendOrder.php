<?php 
// Подключение переменных
include 'settings.php';

// Функция для отправки писем с формы "ЗАКАЗАТЬ УСЛУГУ"

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$page = $_POST['phone'];
$name = $_POST['name'];
$email = $_POST['phone'];
$phone = $_POST['phone'];

$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = $myUsername; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = $myUserpassword; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom($myUsername); // От кого будет уходить письмо?
$mail->addAddress($myAddress); // Кому будет уходить письмо
$mail->addAddress($myAddress2); // Кому еще будет уходить письмо

$mail->isHTML(true);
$mail->Subject = 'PrinTeam - Страница - ' .$page. ' заказ'; // Тема письма
$mail->Body    = 'Имя пользователя - ' .$name. '<br>Email пользователя - ' .$email. '<br>Телефон пользователя - ' .$phone;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: ../../thanks.html');
}
?>