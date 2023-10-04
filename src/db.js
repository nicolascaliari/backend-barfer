const mysql2 = require('mysql2/promise');


const createConnection = async () => {
    const db = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'agunic1004',
        database: 'barfer',
        waitForConnections: true,
        connectionLimit: 90, 
    });
    return db;
}


module.exports = createConnection;


