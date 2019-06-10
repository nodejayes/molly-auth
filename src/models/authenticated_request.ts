import {Request} from 'express';
import {IMollyContext} from "../context";

export class MollyAuthenticatedRequest extends Request {
    mollyContext: IMollyContext;
}
