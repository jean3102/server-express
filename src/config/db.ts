import mysql from "mysql2/promise";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from "./envAccess";

async function connectDB() {
	try {
		const pool = mysql.createPool({
			host: DB_HOST,
			user: DB_USER,
			password: DB_PASSWORD,
			database: DB_NAME,
			connectionLimit: 10, // Set the maximum number of connections
		});

		// Get a connection from the pool
		pool.getConnection();
		console.log("Connected to MySQL database");
		return pool;
		// // Close the connection pool
		// pool.end();
		// console.log("Connection pool closed");
	} catch (error: any) {
		console.error("Error occurred:", error.message);
	}
}

export { connectDB };
