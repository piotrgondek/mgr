<?
//sleep(2);

session_start();
$_SESSION['reviewAdded'] = true;

if(empty($_SERVER['HTTP_X_REQUESTED_WITH']) || strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
    header("Location: ../../product.php");
} else {
    http_response_code(201);
}
?>