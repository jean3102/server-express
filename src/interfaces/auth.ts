import { SessionData } from "express-session";

export interface IAuth {
	user: string;
	password: string;
}
export interface ISessionData extends SessionData {
	user?: IUserData
}

export interface IUserData {
	userId: number;
	user: string;
	pass?: string;
	companyId: number;
}
