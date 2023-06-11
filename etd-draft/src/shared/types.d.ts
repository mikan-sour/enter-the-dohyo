import { Request, Response } from "express";

export type TErrorWithMessage = {
  message: string
}

export type TAssetMap = {
  js: string;
  css: string[];
  title: string;
};

export type TApiResponseOK<T> = {
  status: "ok";
  result: T;
};

export type TApiError = {
  status: "nok";
  error: Error;
};

export type TApiResponse<T> = TApiResponseOK<T> | TApiError;

export type TResultOK<T> = {
  ok: true;
  result: T;
};
export type TResultNOK = {
  ok: false;
  error: Error;
};

export type TResult<T> = TResultOK<T> | TResultNOK;

export type TAPIResult<T> = TResult<T>;

export type TBanzukeRank =
  | "Yokozuna"
  | "Ozeki"
  | "Sekiwake"
  | "Komusubi"
  | "Maegashira";
export type TBanzukeSide = "East" | "West";

export type TRikishi = {
  rikishi: string;
  rank: TBanzukeRank;
  position: number;
  side: TBanzukeSide;
  weight: number;
  multiplier: number;
};

export type TBanzuke = {
  yokozuna: TRikishi[];
  ozeki: TRikishi[];
  sekiwake: TRikishi[];
  komosubi: TRikishi[];
  maegashira: TRikishi[];
};

export type TAPIController = (req: Request, res: Response) => Promise<void>;

type TETDTeam = {
  name: string;
  rikishiTachi: TRikishi[];
};

type TDraftState = {
  teams: TETDTeam[];
  currentTeam: TETDTeam | null;
  selectedRikishi: TRikishi | null;
  alreadyPicked:string[];
};

type TDraftAction =
  | { type: "INIT"; payload: { teams: TETDTeam[] } }
  | { type: "SELECT_RIKISHI"; payload: TRikishi }
  | { type: "DESELECT_RIKISHI" }
  | {
      type: "ADD_RIKISHI_TO_TEAM";
      payload: { rikishi: TRikishi };
    };
