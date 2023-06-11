import { renderToPipeableStream } from "react-dom/server";
import { TAssetMap } from "../../../../shared/types";
import { Response } from "express";

export default async function pipeResponse(
  res: Response,
  component: React.ReactNode,
  assetMap: TAssetMap
) {
  const { pipe } = renderToPipeableStream(component, {
    bootstrapScripts: [assetMap.js],
    onShellReady() {
      res.setHeader("content-type", "text/html");
      pipe(res);
    },
  });
}
