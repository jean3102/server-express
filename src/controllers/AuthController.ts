import bcrypt from "bcrypt";
import { AuthModel } from "../models/AuthModel";
import { Request, Response } from "express";
import { InterfaceSession } from "../interfaces/session";

export class AuthController {
	static async getAuth(req: Request, res: Response) {
		//*check if parameters are correct
		if (Object.keys(req.body).length === 0) {
			throw new Error("Error receiving parameters");
		}

		const { user, password } = req.body;
		const authModel = new AuthModel();
		const auth = await authModel.getUser(user);

		if (!auth) {
			return res.status(401).json("Unauthorized");
		}

		if (auth[0].pass) {
			const checkPassword = AuthController.comparePassword(
				password,
				auth[0].pass
			);
			if (checkPassword) {
				const sessionData = req.session as InterfaceSession["SessionValue"];
				sessionData.user = {
					userId: auth[0].userId,
					userName: auth[0].userName,
					companyId: auth[0].companyId,
				};
				req.session.save();
				res.status(200).json(sessionData.user);
			} else {
				res.status(401).json("Unauthorized");
			}
		}
	}

	static async signOut(req: Request, res: Response) {
		// Destroy the session
		req.session.destroy((err) => {
			if (err) {
				res.status(500).send("Logged out");
				console.error("Error destroying session:", err);
			} else {
				res.status(200).send("Logged out");
			}
		});
	}

	static comparePassword(currentPassword: string, password: string) {
		return bcrypt.compareSync(currentPassword, password);
	}
}
