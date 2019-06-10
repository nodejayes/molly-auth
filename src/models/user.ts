import {BaseModel, BaseTypes, collection, JoinType, MongoLookup, validation} from "molly";
import {Group} from "./group";

@collection({
    allow: 'CUD',
    lookup: [
        new MongoLookup('Group', 'groups', '_id', JoinType.ONEMANY)
    ]
})
export class User extends BaseModel {
    @validation({type: BaseTypes.stringDefaultLength})
    userName: string;
    @validation({type: BaseTypes.stringDefaultLength})
    password: string;
    @validation({type: BaseTypes.email})
    email: string;

    groups: Group[];
}
