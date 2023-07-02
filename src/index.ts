import express, { Express } from "express";
import dotenv from "dotenv";
import authRouter from "./routers/auth";
import { PORT } from "./config/envAccess";
import home from "./routers/home";
import { corsConfig } from "./config/corsConfig";
import session from "express-session";
import AuthMiddleware from "./middleware/auth";
import signOut from "./routers/signOut";

//*config
const app: Express = express();
dotenv.config();
app.use(express.json());

//*Middleware
//?Configure CORS middleware
app.use(corsConfig);

//*session
app.use(
	session({
		secret: "123456789",
		resave: true,
		saveUninitialized: true,
	})
);

//*Router
app.use("/login", authRouter);
app.use("/home", AuthMiddleware, home);
app.use("/signOut", signOut);

app.listen(PORT, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
