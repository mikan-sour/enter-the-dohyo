import React from "react";

import "./index.scss";
import DraftController from "./controller";
import { TBanzuke } from "../../../shared/types";
import { DraftProvider } from "./model";

export default function Draftboard({ data }: { data: TBanzuke }) {
  return (
    <DraftProvider>
      <DraftController data={data} />
    </DraftProvider>
  );
}
