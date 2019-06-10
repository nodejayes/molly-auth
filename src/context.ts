import {verify} from "jsonwebtoken";
import {User} from "./models/user";
import {MollyAuthenticatedRequest} from "./models/authenticated_request";

export interface IMollyContext {
    user: User;
    validFrom: Date;
}

export class MollyAuthContext {
    private _ctx: IMollyContext = null;
    private _secretKey = '12345678';

    get Context(): IMollyContext {
        return this._ctx;
    }

    get IsAuthenticated(): boolean {
        return this._ctx && this._ctx.user && this._ctx.validFrom < new Date();
    }

    parseRequest(req: any): void {
        const token = req.headers['app_token'];
        if (!token) {
            this._ctx = null;
            return;
        }
        const tokenData = this._readToken(token.toString());
        if (!tokenData) {
            this._ctx = null;
            return;
        }
        this._ctx = tokenData;
        // register the Context on the Request
        (<MollyAuthenticatedRequest>req).mollyContext = this._ctx;
    }

    private _readToken(token: string): any {
        try {
            return verify(token, this._secretKey);
        } catch (err) {
            return null;
        }
    }
}
