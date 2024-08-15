<?php
require_once('../../../connection.php');

$conn = createConnection();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $email = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
    $password = trim($data['password'] ?? '');
    $confirmPassword = trim($data['confirmPassword'] ?? '');
    $phone = htmlspecialchars(trim($data['phone'] ?? ''));
    $address = htmlspecialchars(trim($data['address'] ?? ''));

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['message' => 'Invalid email format.']);
        exit();
    }

    if ($password !== $confirmPassword) {
        http_response_code(400);
        echo json_encode(['message' => 'Passwords do not match.']);
        exit();
    }

    $hashedPassword = sha1($password);

    $stmt = $conn->prepare("INSERT INTO users (email, password, phone, address) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $email, $hashedPassword, $phone, $address);

    if ($stmt->execute()) {
        http_response_code(200);
        echo json_encode(['message' => 'Registration successful.']);
    } else {
        http_response_code(500);
        echo json_encode(['message' => 'An error occurred during registration.']);
    }

    $stmt->close();
} else {
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed.']);
}

$conn->close();
