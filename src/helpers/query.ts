import { DB } from '../config/db';

export class ExecutionQuery {
	select = async (query: string) => {
		const connection = await (await DB()).getConnection();
		connection;
		if (connection) {
			try {
				const [result] = await connection.query(query);
				return result;
			} catch (error) {
				throw new Error(`Error executing query: ${error}`);
			}
		}
	};

	update = async (
		sql: string,
		value: (string | number | Date)[]
	): Promise<string | boolean> => {
		const connection = await (await DB()).getConnection();
		if (connection) {
			try {
				const [result]: any = await connection.query(sql, value);
				return result.affectedRows === 1;
			} catch (err: any) {
				throw new Error(`Error updating data: ${err}`);
			}
		}
		return true;
	};

	insert = async (
		sql: string,
		value: (string | number | Date)[]
	): Promise<any> => {
		const connection = await (await DB()).getConnection();
		if (connection) {
			try {
				const [result]: any = await connection.query(sql, value);
				return result.affectedRows === 1;
			} catch (err: any) {
				if (err.code === 'ER_DUP_ENTRY') {
					return 'duplicate';
				}
				throw new Error(`Error inserting data: ${err}`);
			}
		}
		return false;
	};

	delete_ = async (
		sql: string,
		value: (string | number)[]
	): Promise<string | boolean> => {
		const connection = await (await DB()).getConnection();
		if (connection) {
			try {
				const [result]: any = await connection.query(sql, value);
				return result.affectedRows === 1;
			} catch (err: any) {
				throw new Error(`Error deleting data: ${err}`);
			}
		}
		return false;
	};
}
