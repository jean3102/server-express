import { IAuth } from "../interfaces/auth";
import AuthModel from "../models/AuthModel";
import bcrypt from "bcrypt";
export default async function AuthController(data: IAuth) {
	const user = await AuthModel(data);
	if (user.length > 0 && user[0].pass) {
		const res = await comparePassword(data.password, user[0].pass);
		if (res) {
			return {
				userId: user[0].userId,
				user: user[0].user,
				companyId: user[0].companyId,
			};
		}
	}
	return false;
}

const comparePassword = async (currentPassword: string, password: string) => {
	return bcrypt.compareSync(currentPassword, password);
};

// const encryptPassword = async (password: string) => {
// 	const hash = await bcrypt.hash(password, 10);
// 	return hash;
// };
