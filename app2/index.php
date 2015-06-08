<?php
    session_start();

    if(empty($_SESSION['basket'])) {
        $_SESSION['basket']['id'] = md5('myBasket');
        $_SESSION['basket']['amount'] = 0;
        $_SESSION['basket']['quantity'] = 0;
    }
?>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>App 2: single page application</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
<div class="main-container">
    <div class="loading"></div>
</div>
<script type="text/javascript" src="js/basic.min.js"></script>
<script type="text/javascript" src="js/app.min.js"></script>
<script type="text/javascript" src="js/modules.min.js"></script>
<script type="text/javascript" src="js/components.min.js"></script>
</body>
</html>