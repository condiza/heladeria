import { createPool } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export async function connect() {
    try {
        const connection = await createPool({
            host: process.env.APP_HOST,
            user: process.env.APP_USER,
            password: process.env.APP_PASSWORD,
            database: process.env.APP_DATABASE,
            connectionLimit: 10 
        });
        // Verificar si la conexión se estableció correctamente
        await connection.query('SELECT 1');
        console.log('Conexión a la base de datos establecida correctamente');
        return connection;
    } catch (error:any) {
        console.error('Error al conectar a la base de datos:', error.message);
        throw error; // Lanzar el error para que sea manejado por la aplicación
    }
}
