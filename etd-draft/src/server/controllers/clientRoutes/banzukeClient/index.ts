import { Request, Response } from "express";
import BanzukeRepo from "../../../repo/banzuke";
import BanzukeService from "../../../service/banzuke";
import utils from "../../utils";
import sharedUtils from '../../../../shared/utils';


export default async function (_req: Request, res: Response) {
  try {
    const repo = new BanzukeRepo({});
    const service = new BanzukeService(repo);
    const data = await service.getBanzuke();
    if (!data.ok) {
      throw data.error;
    }
    const response = utils.responseOK(data.result)
    res.send(response)
  } catch (error) {
    const errRes = utils.responseNOK(error);
    res.send(errRes);
  }
}
