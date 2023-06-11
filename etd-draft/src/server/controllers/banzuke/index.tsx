import React from "react";
import Draft, { assets as draftAssets } from "../../../client/pages/draft";
import { Request, Response } from "express";
import BanzukeService from "../../service/banzuke";
import { TAPIController } from "../../../shared/types";
import controllerUtils from '../utils'

export default function (service: BanzukeService): TAPIController {
  return async (_req: Request, res: Response) => {
    try {
      const data = await service.getBanzuke();
      if(!data.ok) {
        throw data.error
      }
      const view = <Draft data={data.result}/>
      await controllerUtils.pipeResponse(res, view, draftAssets);
    } catch (error) {
      res.send(500);
    }
  };
}
