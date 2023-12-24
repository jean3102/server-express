import dotenv from "dotenv";
dotenv.config();

//*Session credential
export const SESSION_SECRET = process.env.SESSION_SECRET || "123456";
export const PRODUCTION = process.env.NODE_ENV === "production";
export const SITE_ENV = process.env.SOME_SITE_ENV === "none";

//*Database credential
export const PORT = process.env.PORT || 3030;
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "";
export const DB_NAME = process.env.DB_NAME || "project";
export const DB_PORT = process.env.DB_PORT || "3306";
