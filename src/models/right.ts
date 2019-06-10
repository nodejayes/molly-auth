import {BaseModel, BaseTypes, collection, validation} from "molly";

@collection({
    allow: 'CUD'
})
export class Right extends BaseModel {
    @validation({type: BaseTypes.stringDefaultLength})
    name: string;
}
