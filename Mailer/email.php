<?php

require 'PHPMailerAutoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$result="";
if(isset($_POST['submit'])){
    require 'PHPMailer/PHPMailerAutoload.php';
    //$name= $_POST['name'];
    //$email= $_POST['email'];
    //$subject= $_POST['subject'];
    //$message= $_POST['message'];

    $mail = new PHPMailer;

        //Server settings
        $mail->SMTPDebug = 2;                                       // Enable verbose debug output
        $mail->isSMTP();                                            // Set mailer to use SMTP
        $mail->Host       = 'smtp.gmail.com';  // Specify main and backup SMTP servers
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = 'louishinohara@gmail.com';                     // SMTP username
        $mail->Password   = 'Superasianman264';                               // SMTP password
        $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
        $mail->Port       = 587;                                    // TCP port to connect to

        //Recipients
        $mail->setFrom($_POST['email'],$_POST['name']);
        $mail->addAddress('louisshinohara@gmail.com');     // Add a recipient
        $mail->addReplyTo($_POST['email'],$_POST['name']);

        $mail->isHTML(true);                                  // Set email format to HTML
        
        $mail->Subject = 'Form Submission: '.$_POST['subject'];
        $mail->Body    = '<h1 align=center>Name :'.$_POST['name'].'<br>Email:: '.$_POST['email'].'<br>MESSAGE: '.$_POST['message'].'</h1>';
        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
        
        if(!$mail->send()) {
            $result="Something went wrong. Please try again.";
        } 
        else {
            $result="Message has been sent. Thanks ".$_POST['name']." for contacting us. We'll get back to you soon!";
        }
    }
