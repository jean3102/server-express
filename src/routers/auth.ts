import express, { Request, Response } from "express";
import LoginController from "../controllers/AuthController";
import { IAuth, ISessionData } from "../interfaces/auth";
import session from "express-session";

const authRouter = express.Router();

authRouter.post("/", async (req: Request<IAuth>, res: Response) => {
	const { user, password } = req.body;
	const result = await LoginController({ user: user, password: password });

	// TODO If the authentication is successful , it will set the value for the session
	if (result) {
		const sessionData = req.session as ISessionData; // Cast the session object to your custom interface
		sessionData.user = {
			user: result.user,
			userId: result.userId,
			companyId: result.companyId,
		};
		return res.status(202).json(sessionData.user);
	}

	//* if query execute correctly return success otherwise return error
	if (result === false) {
		return res.status(402).send("Unauthorized");
	}

	if (result === undefined) {
		return res
			.status(500)
			.json({ error: "An error occurred while executing the query" });
	}
});

export default authRouter;
