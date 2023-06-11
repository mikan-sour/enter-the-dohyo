import React from "react";
import { hydrateRoot } from "react-dom/client";

import DraftboardPage from '.';
import { TApiResponse, TBanzuke } from "../../../shared/types";

(async () => {
    const request = await fetch('/banzukeClient');
    const response:TApiResponse<TBanzuke> = await request.json();
    if(response.status !== 'nok') {
        hydrateRoot(document,<DraftboardPage data={response.result}/>);
    }
})()

