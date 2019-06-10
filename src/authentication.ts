import {MollyAuthContext} from "./context";
import {Request} from "express";

export function authentication(req: Request): boolean {
    const ctx = new MollyAuthContext();
    ctx.parseRequest(req);
    return ctx.IsAuthenticated;
}
