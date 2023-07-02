import express, { Request, Response } from "express";
const signOut = express.Router();

signOut.post("/", async (req: Request, res: Response) => {
	// Destroy the session
	req.session?.destroy((err) => {
		if (err) {
			console.log("Error destroying session:", err);
			return res.sendStatus(500);
		}
		// Redirect or send a response indicating successful logout
		res.status(200).send('1'); // Replace '/login' with the appropriate route for your login page
	});
});

export default signOut;
