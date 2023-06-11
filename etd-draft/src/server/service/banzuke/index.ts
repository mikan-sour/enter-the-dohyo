import { TBanzuke, TResult } from "../../../shared/types";
import BanzukeRepo from "../../repo/banzuke";

export default class BanzukeService {
  banzukeRepo: BanzukeRepo;
  constructor(repo: BanzukeRepo) {
    this.banzukeRepo = repo;
  }

  async getBanzuke(): Promise<TResult<TBanzuke>> {
    try {
      const res = await this.banzukeRepo.getBanzuke();
      if (!res.ok) {
        throw res.error;
      }
      return res;
    } catch (error) {
      return { ok: false, error };
    }
  }
}
