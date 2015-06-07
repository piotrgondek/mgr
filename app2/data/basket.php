<?
session_start();
header('Content-Type: application/json');

switch($_SERVER['REQUEST_METHOD']){
    case 'GET':
        echo json_encode($_SESSION['basket']);
        break;


    case 'PUT':
        parse_str(file_get_contents("php://input"), $put_vars);
        $data = json_decode( key($put_vars) );

        if($_SESSION['basket']['id'] != $data->id) {
            http_response_code(401);
        } else {
            $_SESSION['basket']['amount'] = $data->amount;
            $_SESSION['basket']['quantity'] = $data->quantity;
            echo json_encode($_SESSION['basket']);
        }
        break;
}
exit;
?>
