import getQuery from "../helpers/query";
import { IAuth, IUserData } from "../interfaces/auth";

export default async function AuthControllerModel(data: IAuth) {
	console.log("🚀 ~ data:", data);
	//TODO get result from database
	const query = `SELECT u.id AS userId,
    u.user AS user,
    u.password AS pass,
    c.id AS companyId
FROM USER u
    INNER JOIN company c ON u.companyId = c.id
WHERE u.user = 'jean3102'`;

	const queryResult = await getQuery(query);
	const user: IUserData[] = queryResult as IUserData[];
	return user;
}
