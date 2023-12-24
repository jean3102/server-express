import { SessionData } from "express-session";
import { InterfaceUser } from "./user";

interface SessionValue extends SessionData {
	user?: InterfaceUser["User"];
}

export interface InterfaceSession {
	SessionValue: SessionValue;
}
