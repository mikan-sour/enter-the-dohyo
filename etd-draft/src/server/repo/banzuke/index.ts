import { TBanzuke, TResult } from "../../../shared/types";
import banzuke from "../../data/mockBanzuke";

export default class BanzukeRepo {
    db: any
    constructor(db:any) {
        this.db = db
    }

    async getBanzuke():Promise<TResult<TBanzuke>> {
        try {
            return { ok: true, result: banzuke }
        } catch (error) {
            return { ok: false, error }
        }
    }
}

