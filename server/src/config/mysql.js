







import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'project1_luggage'
});

connection.connect(err => {
    if (err) {
        console.error('Lỗi kết nối cơ sở dữ liệu: ' + err.stack);
        return;
    }
    console.log('Kết nối cơ sở dữ liệu thành công');
});

export default connection;
