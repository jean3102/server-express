import express, {Router } from "express";
import { HomeController } from "../controllers/HomeController";

export class HomeRouter {
	#router: Router;
	constructor() {
		this.#router = express.Router();
		this.initializeRouter();
	}

	initializeRouter() {
		//* routers For Handle home
		this.#router.get("/", HomeController.checkAuth);
	}
	
	getRouter() {
		return this.#router;
	}
}
