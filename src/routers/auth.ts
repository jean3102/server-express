import express from "express";
import { AuthController } from "../controllers/AuthController";

export class AuthRouter {
	#router = express.Router();
	constructor() {
		this.#router = express.Router();
		this.#initializeRouter();
	}

	#initializeRouter() {
		this.#router.post("/signIn", AuthController.getAuth);
		this.#router.post("/signOut", AuthController.signOut);
	}

	getRouter() {
		return this.#router;
	}
}
