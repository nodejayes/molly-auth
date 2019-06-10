import {BaseModel, BaseTypes, collection, JoinType, MongoLookup, validation} from "molly";
import {Right} from "./right";

@collection({
    allow: 'CUD',
    lookup: [
        new MongoLookup('Right', 'rights', '_id', JoinType.ONEMANY)
    ]
})
export class Group extends BaseModel {
    @validation({type: BaseTypes.stringDefaultLength})
    name: string;
    rights: Right[];
}
