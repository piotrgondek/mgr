<?

session_start();

$_SESSION['basket']['quantity']++;
$_SESSION['basket']['amount'] += $_POST['price'];

if(empty($_SERVER['HTTP_X_REQUESTED_WITH']) || strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
    header("Location: ../../product.php");
} else {
    header("Location: basket.php");
}

exit;
?>