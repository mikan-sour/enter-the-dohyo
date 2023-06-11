import { TAPIController } from "../../shared/types";
import banzukeController from "../controllers/banzuke";
import BanzukeRepo from "../repo/banzuke";
import BanzukeService from "../service/banzuke";

class Api {
  banzukeRepo: BanzukeRepo;
  banzukeService: BanzukeService;
  getBanzuke: TAPIController;
  constructor(db: any) {
    this.banzukeRepo = new BanzukeRepo(db);
    this.banzukeService = new BanzukeService(this.banzukeRepo);
    this.getBanzuke = banzukeController(this.banzukeService);
  }
}

export default new Api({});
