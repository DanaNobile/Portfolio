<?php
if($_POST["message"]) {
    mail("danagnobile@gmail.com", "Form to email message", $_POST["message"], "From: an@email.address");
}
?>