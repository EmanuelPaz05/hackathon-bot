const mysql = require('mysql2/promise');

const connectDB = async () => {
    try {
        const connection = await mysql.createConnection({
            host: '45.235.98.42',
            user: 'cesara_6835',
            password: 'H4YLRJ37aGdHFPcY',
            database: 'cesara_6835'//Cadena de conexión a la base de datos
        });

        console.log('Database connected successfully');
        return connection; // importante: devuelve la conexión para usarla
    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
