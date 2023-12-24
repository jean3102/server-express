import session from "express-session";
import { dbConfig } from "./db";
import { PRODUCTION, SESSION_SECRET, SITE_ENV } from "./envAccess";
const mysqlStore = require("express-mysql-session")(session);

const sessionStore = new mysqlStore(dbConfig);
const ONE_DAY = 1000 * 60 * 60 * 24; // 1 day

export const sessionSetting = session({
	name: "sessionUser",
	resave: false,
	saveUninitialized: false,
	store: sessionStore,
	secret: SESSION_SECRET,
	// proxy: true,
	cookie: {
		maxAge: ONE_DAY,
		secure: PRODUCTION, // Set to true in production
		sameSite: SITE_ENV ? "none" : "lax",
	},
});
