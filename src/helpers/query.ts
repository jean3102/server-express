import { connectDB } from "../config/db";

export default async function getQuery(query: string) {
	const pool = await connectDB();
	if (pool) {
		try {
			const [result] = await pool.query(query);
			pool.end(); // Close the connection after running the query
			return result;
		} catch (error) {
			console.error("Error executing query:", error);
		}
	}
}
