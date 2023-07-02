import express, { Request, Response } from "express";
import { ISessionData } from "../interfaces/auth";
const home = express.Router();

home.get("/", async (req: Request, res: Response) => {
	res.send("home");
});

export default home;
