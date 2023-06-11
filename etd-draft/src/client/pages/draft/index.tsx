import React from "react";
import DraftPage from "./page";
import WithHTML from "../../utils/WithHTML";
import { assets } from "./assets";
import { TBanzuke } from "../../../shared/types";

export default function Draft({data}:{data:TBanzuke}){
    return (
        <WithHTML assetMap={assets}>
            <DraftPage data={data}/>
        </WithHTML>
    )
}

export { assets };