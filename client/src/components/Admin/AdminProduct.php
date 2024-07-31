<?php
require_once ('../../connection.php');
$tables = [
    [
        'title' => 'products',
        'columns' => [
            'id',
            'name',
            'description',
            'gender',
            'quantity',
            'image1',
            'image2',
            'price',
            'rating'
        ]
    ],
    [
        'title' => 'attributes',
        'columns' => [
            'id',
            'attribute_type',
            'description'
        ]
    ],
    [
        'title' => 'attribute_values',
        'columns' => [
            'id',
            'attribute_id',
            'value',
            'description'
        ]
    ]
];

// fetch 
function fetchData($table)
{
    $reactFileName = $_SERVER['HTTP_X_REACT_FILE_NAME'];

    $conn = createConnection();

    if ($reactFileName === 'AdminProduct.jsx') {
        $sql = "SELECT  p.*,
                    MAX(CASE WHEN a.attribute_type = 'color' THEN av.value END) AS color,
                    MAX(CASE WHEN a.attribute_type = 'size' THEN av.value END) AS size,
                    MAX(CASE WHEN a.attribute_type = 'brand' THEN av.value END) AS brand,
                    MAX(CASE WHEN a.attribute_type = 'type' THEN av.value END) AS type
            FROM products AS p
            JOIN product_attri AS pa ON p.id = pa.product_id
            JOIN attribute_values av ON pa.attribute_value_id = av.id
            JOIN attributes a ON av.attribute_id = a.id
            GROUP BY p.id";
        // $result = $conn->query($sql);
    } else {
        $columns = implode(', ', $table['columns']);
        $title = $table['title'];

        $sql = "SELECT $columns FROM $title";
    }

    $result = $conn->query($sql);
    $data = array();

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
            // echo ($data);
        }
    }

    closeConnection($conn);

    return $data;
}


if (isset($_SERVER['HTTP_X_REACT_FILE_NAME'])) {
    $reactFileName = $_SERVER['HTTP_X_REACT_FILE_NAME'];
    $expectedReactFileName = '';

    if ($reactFileName === 'AdminProduct.jsx') {
        $table = $tables[0];
        $expectedReactFileName = 'AdminProduct.jsx';
    }
    ;
    if ($reactFileName === 'AdminAttribute.jsx') {
        $table = $tables[1];
        $expectedReactFileName = 'AdminAttribute.jsx';
    }
    ;
    if ($reactFileName === 'AdminAttriValue.jsx') {
        $table = $tables[2];
        $expectedReactFileName = 'AdminAttriValue.jsx';
    }
    ;


    if ($reactFileName === $expectedReactFileName) {

        $data = fetchData($table);
        echo json_encode($data);

    } else {
        // echo json_encode(array("error" => "Incorrect FileName for fetchdata"));
    }
}



//delete
function deleteData($id, $table)
{
    $title = $table['title'];

    $conn = createConnection();

    $sql = "DELETE FROM $title WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();

    $data = $stmt->affected_rows;

    $stmt->close();
    closeConnection($conn);

    return $data > 0;  // Return true if deletion was successful
}


if (isset($_SERVER['HTTP_X_REACT_FILE_NAME']) && isset($_SERVER['HTTP_X_FILE_TYPE'])) {
    $reactFileType = $_SERVER['HTTP_X_FILE_TYPE'];
    $reactFileName = $_SERVER['HTTP_X_REACT_FILE_NAME'];


    $expectedReactFileName = 'AdminDelete.jsx';
    if ($reactFileType === 'product') {
        $table = $tables[0];
        $expectedReactFileType = 'product';
    }
    ;
    if ($reactFileType === 'attri') {
        $table = $tables[1];
        $expectedReactFileType = 'attri';
    }
    ;
    if ($reactFileType === 'attri_value') {
        $table = $tables[1];
        $expectedReactFileType = 'attri_value';
    }
    ;
    // echo json_encode($expectedReactFileType);
    // exit;


    if ($reactFileName === $expectedReactFileName && $reactFileType === $expectedReactFileType) {
        $id = intval(basename($_SERVER['REQUEST_URI'])); // Extract ID from URL path

        // echo json_encode('vao');
        // echo json_encode($reactFileName);
        // echo json_encode($reactFileType);
        // exit;
        if ($id > 0) {
            $deleted = deleteData($id, $table);

            if ($deleted) {
                echo json_encode(array("message" => "deleted successfully"));
            } else {
                echo json_encode(array("error" => "Failed to delete"));
            }
        } else {
            echo json_encode(array("error" => "Invalid ID provided"));
        }

    } else {
        // echo json_encode(array("error" => "Incorrect FileName for deleteData"));
    }
} else {
    // Handle the case where the custom header is not set
    // No output or handle as needed
}



//fetch by id
function fetchDataById($table, $id)
{
    $reactFileType = $_SERVER['HTTP_X_FILE_TYPE'];

    $conn = createConnection();

    if ($reactFileType === 'product') {
        // echo json_encode($id);
        $stmt = $conn->prepare("SELECT  p.*,
                    MAX(CASE WHEN a.attribute_type = 'color' THEN av.value END) AS color,
                    MAX(CASE WHEN a.attribute_type = 'size' THEN av.value END) AS size,
                    MAX(CASE WHEN a.attribute_type = 'brand' THEN av.value END) AS brand,
                    MAX(CASE WHEN a.attribute_type = 'type' THEN av.value END) AS type
            FROM products AS p
            JOIN product_attri AS pa ON p.id = pa.product_id
            JOIN attribute_values av ON pa.attribute_value_id = av.id
            JOIN attributes a ON av.attribute_id = a.id
            WHERE p.id = ?
            GROUP BY p.id");
    } else {
        $columns = implode(', ', $table['columns']);
        $title = $table['title'];

        $stmt = $conn->prepare("SELECT $columns FROM $title WHERE id = ?");

    }

    // echo json_encode($stmt);
    $stmt->bind_param("i", $id);

    $stmt->execute();
    $result = $stmt->get_result();

    // echo json_encode('vaof');
    if ($result->num_rows > 0) {
        $data = $result->fetch_assoc();
        // echo json_encode($data);
    } else {
        $data = null;
    }

    $stmt->close();

    closeConnection($conn);

    return $data;
}


if (isset($_SERVER['HTTP_X_REACT_FILE_NAME']) && isset($_SERVER['HTTP_X_FILE_TYPE'])) {
    $reactFileName = $_SERVER['HTTP_X_REACT_FILE_NAME'];
    $reactFileName = $_SERVER['HTTP_X_REACT_FILE_NAME'];

    $expectedReactFileName = 'AdminEdit.jsx';
    if ($reactFileType === 'product') {
        $table = $tables[0];
        // $expectedReactFileType = 'product';
    }
    if ($reactFileType === 'attri') {
        $table = $tables[1];
        // $expectedReactFileType = 'attri';
    }
    if ($reactFileType === 'attri_value') {
        $table = $tables[1];
        // $expectedReactFileType = 'attri_value';
    }

    // echo json_encode($reactFileName);
    // echo json_encode($reactFileType);

    if ($reactFileName === $expectedReactFileName && $reactFileType) {

        $id = intval(basename($_SERVER['REQUEST_URI'])); // Extract ID from URL path
        // echo json_encode($id);

        $data = fetchDataById($table, $id);
        if ($data) {
            // echo json_encode('vao');
            echo json_encode($data);
        } else {
            // Return 404 Not Found if data not found
            http_response_code(404);
            echo json_encode(['error' => 'data not found']);
        }
    } else {
        // Return 400 Bad Request if method is not supported
        http_response_code(400);
        echo json_encode(['error' => 'Error file name for fetch by id']);
    }
}