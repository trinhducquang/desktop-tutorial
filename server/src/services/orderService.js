import connection from '../config/mysql.js';

export function updateOrderStatus(orderIdValue) {
    const updateOrderStatus = 'UPDATE orders SET status = ? WHERE id = ?';
    return new Promise((resolve, reject) => {
        connection.query(updateOrderStatus, ['Success', orderIdValue], (err, results) => {
            if (err) {
                reject('Lỗi khi cập nhật trạng thái đơn hàng: ' + err.stack);
            } else {
                resolve(results);
            }
        });
    });
}

export function getUserEmail(orderIdValue) {
    const query = `
        SELECT u.email 
        FROM users u
        JOIN orders o ON u.id = o.user_id
        WHERE o.id = ?
    `;
    return new Promise((resolve, reject) => {
        connection.query(query, [orderIdValue], (err, results) => {
            if (err) {
                reject('Lỗi khi lấy email: ' + err.stack);
            } else {
                resolve(results[0]?.email);
            }
        });
    });
}
