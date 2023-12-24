import { Request, Response } from "express";

export class HomeController {
	static async checkAuth(req: Request, res: Response) {
		res.status(200).send("authorized");
	}
}
