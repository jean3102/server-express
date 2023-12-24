import mysql from "mysql2/promise";
import { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } from "./envAccess";

export const dbConfig = {
	host: DB_HOST,
	user: DB_USER,
	password: DB_PASSWORD,
	database: DB_NAME,
	// connectionLimit: 1, // Set the maximum number of connections
	//createDatabaseTable: true, // Set true if session table is not exist
};

export async function DB() {
	try {
		console.log("Connected to MySQL database");
		return mysql.createPool(dbConfig);
	} catch (error) {
		console.error("Error connecting to MySQL database:", error);
		throw error;
	}
}
