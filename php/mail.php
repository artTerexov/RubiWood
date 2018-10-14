<?php
if (!empty($_POST['client-name']) AND !empty($_POST['client-phone']) AND !empty($_POST['client-mail']))
{
    $headers = 'From: RubiWood
' .
                'Reply-To: art133140@gmail.com
' .
                'X-Mailer: PHP/' . phpversion();

    $theme = "Новый заказ";
    $letter = "Данные сообщения:";
    $letter .="Имя: ".$_POST['client-name'];
    $letter .="Email: ".$_POST['client-mail'];
    $letter .="Телефон: ".$_POST['client-phone'];

    if (mail("art133140@gmail.com", $theme, $letter, $headers)){
      header("Location: /index.html");
    } else {
      header("Location: /index.html");
    }

} else {
  header("Location: /index.html");
}
?>
