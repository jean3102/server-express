import { NextFunction, Request, Response } from "express";
import { ISessionData } from "../interfaces/auth";

export default function AuthMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	// Check for authentication token or any other authentication logic
	const sessionData = req.session as ISessionData; // Cast the session object to your custom interface
	if (sessionData.user) {
		// User is authenticated, proceed to the next middleware or route handler
		next();
	} else {
		// User is not authenticated, send an error response
		res.status(401).json({ error: "Unauthorized" });
	}
}
