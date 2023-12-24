import { NextFunction, Request, Response } from "express";
import { InterfaceSession } from "../interfaces/session";

export default function AuthMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	//* Check for authentication token or any other authentication logic
	const sessionData = req.session as InterfaceSession["SessionValue"]; //? Cast the session object to your custom interface

	if (!sessionData.user) {
		return res.status(401).json({ error: "session expired" });
	}
	next();
}
