<?php
require_once ('../connection.php');

$tables = [
    [
        'title' => 'products',
        'columns' => [
            // 'id',
            'name',
            'description',
            'gender',
            'quantity',
            // 'image1',
            // 'image2',
            'link',
            'price',
            'rating',
            'id',
        ],
        'type' => 'sssdsddi', // isssdssdd

        'attriTitle' => 'product_attri',
        'attribute' => [
            'color',
            'size',
            'brand',
            'type'
        ],
        'attriType' => 'iiii'
    ],
    [
        'title' => 'attributes',
        'columns' => [
            'attribute_type',
            'description',
            'id'
        ],
        'type' => 'ssi'
    ],
    [
        'title' => 'attribute_values',
        'columns' => [
            'attribute_id',
            'value',
            'description',
            'id'
        ],
        'type' => 'dssi',
        'byId' => 'attribute_id'
    ],
    [
        'title' => 'users',
        'columns' => [
            'name',
            'password',
            'email',
            'phone',
            'address',
            'role',
            'id'
        ],
        'type' => 'ssssssi'
    ],
    [
        'title' => 'orders',
        'columns' => [
            'user_id',
            'name',
            'email',
            'phone',
            'address',
            'order_date',
            'total_amount',
            'id'
        ],
        'type' => 'issssadi'
    ],
    [
        'title' => 'order_detail',
        'columns' => [
            'order_id',
            'product_id',
            'price_product',
            'quantity',
            'subtotal',
            'id'
        ],
        'type' => 'dssi'
    ],
    [
        'title' => 'videos',
        'columns' => [
            'name',
            'type',
            'link',
            'id'
        ],
        'type' => 'sssi'
    ],
    [
        'title' => 'images',
        'columns' => [
            'product_id',
            'image',
            'id'
        ],
        'type' => 'isi',
        'byId' => 'product_id'
    ],
    [
        'title' => 'product_attri',
        'columns' => [
            'product_id',
            'attribute_value_id'
        ],
        'type' => 'ii',
        'byId' => 'product_attri_id'
    ]
];

// fetch 
function fetchData($table)
{
    $reactFileName = $_SERVER['HTTP_X_REACT_FILE_NAME'];
    // $reactFileType = $_SERVER['HTTP_X_FILE_TYPE'];

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
        $result = $conn->query($sql);

    } else {
        $columns = implode(', ', $table['columns']);
        $title = $table['title'];

        $sql = "SELECT $columns FROM $title";
        $result = $conn->query($sql);
    }

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
    // $reactFileType = $_SERVER['HTTP_X_FILE_TYPE'];
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
    if ($reactFileName === 'AdminUsers.jsx') {
        $table = $tables[3];
        $expectedReactFileName = 'AdminUsers.jsx';
    }
    if ($reactFileName === 'AdminOrders.jsx') {
        $table = $tables[4];
        $expectedReactFileName = 'AdminOrders.jsx';
    }
    if ($reactFileName === 'AdminOrderDetail.jsx') {
        $table = $tables[5];
        $expectedReactFileName = 'AdminOrderDetail.jsx';
    }
    if ($reactFileName === 'AdminVideo.jsx') {
        $table = $tables[6];
        $expectedReactFileName = 'AdminVideo.jsx';
    }
    if ($reactFileName === 'AdminImage.jsx') {
        $table = $tables[7];
        $expectedReactFileName = 'AdminImage.jsx';
    }
    if ($reactFileName === 'AdminProductAttri.jsx') {
        $table = $tables[8];
        $expectedReactFileName = 'AdminProductAttri.jsx';
    }

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
        // $expectedReactFileType = 'product';
    }
    ;
    if ($reactFileType === 'attri') {
        $table = $tables[1];
        // $expectedReactFileType = 'attri';
    }
    ;
    if ($reactFileType === 'attri_value') {
        $table = $tables[2];
        // $expectedReactFileType = 'attri_value';
    }
    ;
    if ($reactFileType === 'user') {
        $table = $tables[3];
    }
    if ($reactFileType === 'order') {
        $table = $tables[4];
    }
    if ($reactFileType === 'order_detail') {
        $table = $tables[5];
    }
    if ($reactFileType === 'video') {
        $table = $tables[6];
    }
    if ($reactFileType === 'image') {
        $table = $tables[7];
    }
    if ($reactFileType === 'product_attri') {
        $table = $tables[8];
    }


    if ($reactFileName === $expectedReactFileName && $table) {
        $id = intval(basename($_SERVER['REQUEST_URI'])); // Extract ID from URL path

        // echo json_encode('vao');
        // echo json_encode($id);
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
}



//fetch by id
function fetchDataById($table, $id)
{
    $reactFileType = $_SERVER['HTTP_X_FILE_TYPE'];

    $conn = createConnection();

    if ($reactFileType === 'product') {
        // echo json_encode($id);
        $stmt = $conn->prepare("SELECT  p.*,
                    MAX(CASE WHEN a.attribute_type = 'color' THEN av.id END) AS color,
                    MAX(CASE WHEN a.attribute_type = 'size' THEN av.id END) AS size,
                    MAX(CASE WHEN a.attribute_type = 'brand' THEN av.id END) AS brand,
                    MAX(CASE WHEN a.attribute_type = 'type' THEN av.id END) AS type
            FROM products AS p
            JOIN product_attri AS pa ON p.id = pa.product_id
            JOIN attribute_values av ON pa.attribute_value_id = av.id
            JOIN attributes a ON av.attribute_id = a.id
            WHERE p.id = ?
            GROUP BY p.id");
    } elseif ($reactFileType === 'attriValue_by_Id' || $reactFileType === 'image_by_Id' || $reactFileType === 'product_attri_by_id') { //lay id cua attribute_id
        $columns = implode(', ', $table['columns']);
        $title = $table['title'];
        $id = intval(basename($_SERVER['REQUEST_URI']));
        $byId = $table['byId'];

        $sql = $conn->prepare("SELECT $columns FROM $title WHERE $byId = ?");

        $sql->bind_param("i", $id);

        $sql->execute();
        $result = $sql->get_result();

        $data = array();

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
                // echo ($data);
            }
        }
        $sql->close();

        closeConnection($conn);
    } else {
        $columns = implode(', ', $table['columns']);
        $title = $table['title'];

        $stmt = $conn->prepare("SELECT $columns FROM $title WHERE id = ?");

    }

    // echo json_encode($reactFileType);
    if ($reactFileType !== 'attriValue_by_Id' && $reactFileType !== 'image_by_Id' && $reactFileType === 'product_attri_by_id') {
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
    }else{
        // echo json_encode('vao');
    }

    return $data;
}


if (isset($_SERVER['HTTP_X_REACT_FILE_NAME']) && isset($_SERVER['HTTP_X_FILE_TYPE'])) {
    $reactFileName = $_SERVER['HTTP_X_REACT_FILE_NAME'];
    $reactFileName = $_SERVER['HTTP_X_REACT_FILE_NAME'];

    $expectedReactFileName = 'AdminById.jsx';
    if ($reactFileType === 'product') {
        $table = $tables[0];
        // $expectedReactFileType = 'product';
    }
    if ($reactFileType === 'attri') {
        $table = $tables[1];
        // $expectedReactFileType = 'attri';
    }
    if ($reactFileType === 'attri_value' || $reactFileType === 'attriValue_by_Id') {
        $table = $tables[2];
        // $expectedReactFileType = 'attri_value';
    }
    if ($reactFileType === 'user') {
        $table = $tables[3];
    }
    if ($reactFileType === 'order') {
        $table = $tables[4];
    }
    if ($reactFileType === 'order_detail') {
        $table = $tables[5];
    }
    if ($reactFileType === 'video') {
        $table = $tables[6];
    }
    if ($reactFileType === 'image' || $reactFileType === 'image_by_Id') {
        $table = $tables[7];
    }
    if ($reactFileType === 'product_attri' || $reactFileType === 'product_attri_by_id') {
        $table = $tables[8];
    }

    // echo json_encode($reactFileName);
    // echo json_encode($reactFileType);

    if ($reactFileName === $expectedReactFileName && $reactFileType) {

        $id = intval(basename($_SERVER['REQUEST_URI'])); // Extract ID from URL path

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
        // echo json_encode(['error' => 'Error file name for fetch by id']);
    }
}



//edit 
function editProduct($id, $table, $fieldValues, $AttriValues)
{
    $filteredColumns = array_filter($table['columns'], function ($column) {
        return $column !== 'id';
    });

    $type = $table['type'];
    $filteredType = substr($type, 0, -1);
    $columns = implode(', ', array_map(function ($column) {
        return $column . '=?';
    }, $filteredColumns));

    // echo json_encode($id);
    // echo json_encode($type);
    // echo json_encode($fieldValues);
    $title = $table['title'];

    $conn = createConnection();

    $sql = "UPDATE $title SET $columns WHERE id=?";
    $stmt = $conn->prepare($sql);
    // $stmt->bind_param("$type", $fieldValues, $id);
    $typeString = $filteredType . 'i'; // Append 'i' for the integer id

    // Prepare values to bind
    $values = array_merge(array_values($fieldValues), [$id]);

    // Bind the parameters
    $stmt->bind_param($typeString, ...$values);

    $success = $stmt->execute();

    $stmt->close();

    $reactFileType = $_SERVER['HTTP_X_FILE_TYPE'];
    if ($reactFileType === 'product') {
        $sqlDelete = "DELETE FROM product_attri WHERE product_id = ?";
        $stmtDelete = $conn->prepare($sqlDelete);
        $stmtDelete->bind_param('i', $id); // $id is the product_id
        $stmtDelete->execute();
        $stmtDelete->close();

        // $sql = "UPDATE product_attri SET attribute_value_id = ? WHERE product_id = ?";
        $sql = "INSERT INTO product_attri (product_id, attribute_value_id) VALUES (?, ?) ON DUPLICATE KEY UPDATE attribute_value_id = VALUES(attribute_value_id)";

        $stmt = $conn->prepare($sql);

        // Prepare the values array
        $values = [];
        foreach ($AttriValues as $attributeType => $attributeValueId) {
            $values[] = [$id, $attributeValueId]; // $id is the product_id
        }
        // echo json_encode($attributeValueId);
        // echo json_encode($values);

        // Bind the parameters and execute the statement for each set of values
        foreach ($values as $valuePair) {
            $stmt->bind_param('ii', $valuePair[0], $valuePair[1]); // 'ii' for two integers
            $stmt->execute();
        }

        // Close the statement and connection
        $stmt->close();


    }

    closeConnection($conn);

    return $success;

}


if (isset($_SERVER['HTTP_X_REACT_FILE_NAME']) && $_SERVER['HTTP_X_REACT_FILE_NAME'] === 'AdminEdit.jsx' && isset($_SERVER['HTTP_X_FILE_TYPE'])) {
    $reactFileName = $_SERVER['HTTP_X_REACT_FILE_NAME'];
    $reactFileType = $_SERVER['HTTP_X_FILE_TYPE'];

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
        $table = $tables[2];
        // $expectedReactFileType = 'attri_value';
    }
    if ($reactFileType === 'user') {
        $table = $tables[3];
    }
    if ($reactFileType === 'order') {
        $table = $tables[4];
    }
    if ($reactFileType === 'order_detail') {
        $table = $tables[5];
    }
    if ($reactFileType === 'video') {
        $table = $tables[6];
    }
    if ($reactFileType === 'image') {
        $table = $tables[7];
    }


    // echo json_encode($reactFileName);
    // echo json_encode($reactFileType);

    if ($reactFileName === $expectedReactFileName && $reactFileType) {

        $json = file_get_contents('php://input');
        error_log(print_r($json, true)); // Debug: Log JSON data to error log

        $data = json_decode($json, true);
        if ($data === null) {
            http_response_code(400);
            echo json_encode(array("error" => "Invalid JSON data"));
            exit;
        }
        // echo json_encode($data);
        // exit;


        // if(){

        // }


        $filteredColumns = array_filter($table['columns'], function ($column) {
            return $column !== 'id';
        });
        $fieldValues = [];

        // Iterate through columns in the order they are defined
        foreach ($filteredColumns as $index => $column) {
            $type = $table['type'][$index]; // Get the type for the current column

            if (isset($data['fields'][$column])) {
                switch ($type) {
                    case 'i': // Integer
                        $fieldValues[$column] = intval($data['fields'][$column]);
                        break;
                    case 'd': // Decimal
                        $fieldValues[$column] = floatval($data['fields'][$column]);
                        break;
                    case 'a': // Datetime
                        $fieldValues[$column] = DATE_FORMAT($data['fields'][$column], '%m/%d/%Y');
                        break;
                    case 's': // String
                    default:
                        $fieldValues[$column] = (string) $data['fields'][$column];
                        break;
                }
            } else {
                // Handle missing field (optional: throw an error or set a default value)
                throw new Exception("Missing required field: $column");
            }
        }

        $AttriValues = [];
        if ($reactFileType === 'product') {


            // Iterate through columns in the order they are defined
            foreach ($table['attribute'] as $index => $column) {
                $type = $table['attriType'][$index]; // Get the type for the current column

                if (isset($data['fields'][$column])) {
                    switch ($type) {
                        case 'i': // Integer
                            $AttriValues[$column] = intval($data['fields'][$column]);
                            break;
                        case 'd': // Decimal
                            $AttriValues[$column] = floatval($data['fields'][$column]);
                            break;
                        case 'a': // Datetime
                            $fieldValues[$column] = DATE_FORMAT($data['fields'][$column], '%m/%d/%Y');
                            break;
                        case 's': // String
                        default:
                            $AttriValues[$column] = (string) $data['fields'][$column];
                            break;
                    }
                } else {
                    // Handle missing field (optional: throw an error or set a default value)
                    throw new Exception("Missing required field: $column");
                }
            }

        }

        // echo json_encode($fieldValues);
        // echo json_encode($data);
        // exit;
        $id = $data['fields']['id'];

        $updated = editProduct($id, $table, $fieldValues, $AttriValues);

        if ($updated) {
            echo json_encode(array("message" => "Data updated successfully", "id" => $id));
        } else {
            echo json_encode(array("error" => "Failed to update data"));
        }

    } else {
        // Return 400 Bad Request if method is not supported
        http_response_code(400);
        // echo json_encode(['error' => 'Error file name for edit ']);
    }
}




//add new 
function addNewProduct($table, $fieldValues, $AttriValues)
{
    // echo json_encode('vao addnew');

    $filteredColumns = array_filter($table['columns'], function ($column) {
        return $column !== 'id';
    });

    $columnNumber = implode(', ', array_map(function () {
        return '?';
    }, $filteredColumns));

    $columnName = implode(', ', array_map(function ($column) {
        return $column;
    }, $filteredColumns));

    $title = $table['title'];
    $type = $table['type'];
    $filteredType = substr($type, 0, -1);
    // echo json_encode($columnNumber);
    // echo json_encode($filteredColumns);

    $conn = createConnection();

    $sql = "INSERT INTO $title ($columnName) VALUES ($columnNumber)";
    $stmt = $conn->prepare($sql);

    // Prepare values to bind
    $values = array_values($fieldValues);
    // echo json_encode($values);

    // Bind the parameters
    $stmt->bind_param($filteredType, ...$values);

    $success = $stmt->execute();

    $stmt->close();


    if ($success) {
        // Get the ID of the newly inserted record
        $newId = $conn->insert_id;
        // echo json_encode(['success' => true, 'new_id' => $newId]);
    } else {
        // echo json_encode(['success' => false, 'error' => $stmt->error]);
    }

    if ($title === 'products') {

        $values = [];
        foreach ($AttriValues as $attributeType => $attributeValueId) {
            $values[] = [$newId, $attributeValueId]; // $id is the product_id
        }
        // echo json_encode($values);

        foreach ($values as $valuePair) {
            // Step 2: Check if the record already exists
            $sqlCheck = "SELECT COUNT(*) FROM product_attri WHERE product_id = ? AND attribute_value_id = ?";
            $stmtCheck = $conn->prepare($sqlCheck);
            $stmtCheck->bind_param('ii', $valuePair[0], $valuePair[1]);
            $stmtCheck->execute();
            $stmtCheck->bind_result($count);
            $stmtCheck->fetch();
            $stmtCheck->close();

            if ($count == 0) {
                $sqlInsert = "INSERT INTO product_attri (product_id, attribute_value_id) VALUES (?, ?)";
                $stmtInsert = $conn->prepare($sqlInsert);

                // Step 3: Insert the new record if it does not exist
                $stmtInsert->bind_param('ii', $valuePair[0], $valuePair[1]);
                $stmtInsert->execute();
            }
        }

        $stmtInsert->close();

    }

    closeConnection($conn);

    return $success;

}

function sanitizeInput($value, $type)
{
    switch ($type) {
        case 'i': // Integer
            return intval($value);
        case 'd': // Decimal
            return floatval($value);
        case 'a': // Datetime
            return DATE_FORMAT($value, '%m/%d/%Y');
        case 's': // String
        default:
            return htmlspecialchars(strip_tags($value));
    }
}


if (isset($_SERVER['HTTP_X_REACT_FILE_NAME']) && $_SERVER['HTTP_X_REACT_FILE_NAME'] === 'AdminNew.jsx' && isset($_SERVER['HTTP_X_FILE_TYPE'])) {
    $reactFileName = $_SERVER['HTTP_X_REACT_FILE_NAME'];
    $reactFileName = $_SERVER['HTTP_X_REACT_FILE_NAME'];

    $expectedReactFileName = 'AdminNew.jsx';
    if ($reactFileType === 'product') {
        $table = $tables[0];
        // $expectedReactFileType = 'product';
    }
    if ($reactFileType === 'attri') {
        $table = $tables[1];
        // $expectedReactFileType = 'attri';
    }
    if ($reactFileType === 'attri_value') {
        $table = $tables[2];
        // $expectedReactFileType = 'attri_value';
    }
    if ($reactFileType === 'user') {
        $table = $tables[3];
    }
    if ($reactFileType === 'order') {
        $table = $tables[4];
    }
    if ($reactFileType === 'order_detail') {
        $table = $tables[5];
    }
    if ($reactFileType === 'video') {
        $table = $tables[6];
    }
    if ($reactFileType === 'image') {
        $table = $tables[7];
    }


    // echo json_encode($reactFileName);
    // echo json_encode($reactFileType);

    if ($reactFileName === $expectedReactFileName && $reactFileType) {

        $json = file_get_contents('php://input');
        $data = json_decode($json, true);

        if ($data === null) {
            http_response_code(400);
            echo json_encode(array("error" => "Invalid JSON data"));
            exit;
        }
        // echo json_encode($data);
        // exit;


        $filteredColumns = array_filter($table['columns'], function ($column) {
            return $column !== 'id';
        });

        $fieldValues = [];

        // echo json_encode($data);    
        // Iterate through columns in the order they are defined
        foreach ($filteredColumns as $index => $column) {
            $type = $table['type'][$index]; // Get the type for the current column

            if (isset($data['fields'][$column])) {
                // Sanitize and process the field based on its type
                $fieldValues[$column] = sanitizeInput($data['fields'][$column], $type);
            } else {
                // Handle missing field (optional: throw an error or set a default value)
                throw new Exception("Missing required field: $column");
            }
        }


        $AttriValues = [];
        if ($reactFileType === 'product') {


            // Iterate through columns in the order they are defined
            foreach ($table['attribute'] as $index => $column) {
                $type = $table['attriType'][$index]; // Get the type for the current column

                if (isset($data['fields'][$column])) {
                    // Sanitize and process the field based on its type
                    $AttriValues[$column] = sanitizeInput($data['fields'][$column], $type);
                } else {
                    // Handle missing field (optional: throw an error or set a default value)
                    throw new Exception("Missing required field: $column");
                }
            }

        }
        // echo json_encode($fieldValues);
        // echo json_encode($data);
        // exit;

        $updated = addNewProduct($table, $fieldValues, $AttriValues);

        if ($updated) {
            echo json_encode(array("message" => "Product added successfully"));
        } else {
            echo json_encode(array("error" => "Failed to add product"));
        }

    } else {
        // Return 400 Bad Request if method is not supported
        http_response_code(400);
        // echo json_encode(['error' => 'Error file name for edit ']);
    }
}


// by attribute + gender