<?php $name = $_POST['FNAME'];
$email = $_POST['EMAIL'];
$company = $_POST['COMPANY'];
$phone = $_POST['PHONE'];
$message = $_POST['MESSAGE'];
$formcontent="From: $name \n Message: $message";
$recipient = "contact@piksel.art";
$subject = "Website Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader, $company, $phone) or die("Error!");
echo "Thank You!";
?>
