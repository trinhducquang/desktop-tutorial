<?php
require_once ('../../../connection.php');
session_start();

$conn = createConnection();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $email = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
    $password = trim($data['password'] ?? '');

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['message' => 'Invalid email format.']);
        exit();
    }

    $hashedPassword = sha1($password);

    $stmt = $conn->prepare("SELECT password, id, role FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 0) {
        http_response_code(401);
        echo json_encode(['message' => 'Invalid email or password.']);
    } else {
        $user = $result->fetch_assoc();

        if ($hashedPassword === $user['password']) {
            http_response_code(200);
            echo json_encode([
                'message' => 'Login successful.',
                'user_id' => $user['id'],
                'user_role' => $user['role']
            ]);
        } else {
            http_response_code(401);
            echo json_encode(['message' => 'Invalid email or password.']);
        }
    }

    $stmt->close();
} else {
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed.']);
}

$conn->close();
session_destroy();
?>