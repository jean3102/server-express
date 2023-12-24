import express, { Express } from "express";
import { PORT } from "./config/envAccess";
import { corsConfig } from "./config/corsConfig";
import AuthMiddleware from "./middleware/auth";
import { AuthRouter } from "./routers/auth";
import { HomeRouter } from "./routers/home";
import { sessionSetting } from "./config/session";

//*config
const app: Express = express();

app.use(express.json());

//*Middleware
//?Configure CORS middleware
app.use(corsConfig);

//*session
app.set("trust proxy", 1);
app.use(sessionSetting);

//*class
const authRouter = new AuthRouter();
const homeRouter = new HomeRouter();

//*Router
app.use("/auth", authRouter.getRouter());
app.use("/home", AuthMiddleware, homeRouter.getRouter());

app.listen(PORT, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
