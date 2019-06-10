import {User} from "./models/user";
import {Group} from "./models/group";
import {Right} from "./models/right";
import {authentication} from "./authentication";

export const MODELS = [
    User, Group, Right
];

export const mollyAuthentication = authentication;
