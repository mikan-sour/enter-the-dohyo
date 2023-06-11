import { reducer, snakeDraft } from "..";
import { describe, expect, it, beforeEach, jest } from "@jest/globals";
import { TDraftState, TETDTeam } from "../../../../../shared/types";

describe("a snakedraft", () => {
  const teams: TETDTeam[] = [
    { name: "team 1", rikishiTachi: [] },
    { name: "team 2", rikishiTachi: [] },
    { name: "team 3", rikishiTachi: [] },
    { name: "team 4", rikishiTachi: [] },
    { name: "team 5", rikishiTachi: [] },
  ];
  describe("when it's the first pick", () => {
    let newTeams: TETDTeam[];
    let current = 0;
    it("increments to the next team", () => {
      [newTeams, current] = snakeDraft(teams, current);
      expect(current).toEqual(1);
      expect(newTeams.at(current)?.name).toEqual("team 2");

      [newTeams, current] = snakeDraft(newTeams, current);
      expect(current).toEqual(2);
      expect(newTeams.at(current)?.name).toEqual("team 3");

      [newTeams, current] = snakeDraft(newTeams, current);
      expect(current).toEqual(3);
      expect(newTeams.at(current)?.name).toEqual("team 4");

      [newTeams, current] = snakeDraft(newTeams, current);
      expect(current).toEqual(4);
      expect(newTeams.at(current)?.name).toEqual("team 5");

      [newTeams, current] = snakeDraft(newTeams, current);
      expect(current).toEqual(0);
      expect(newTeams.at(current)?.name).toEqual("team 5");

      [newTeams, current] = snakeDraft(newTeams, current);
      expect(current).toEqual(1);
      expect(newTeams.at(current)?.name).toEqual("team 4");

      [newTeams, current] = snakeDraft(newTeams, current);
      expect(current).toEqual(2);
      expect(newTeams.at(current)?.name).toEqual("team 3");

      [newTeams, current] = snakeDraft(newTeams, current);
      expect(current).toEqual(3);
      expect(newTeams.at(current)?.name).toEqual("team 2");

      [newTeams, current] = snakeDraft(newTeams, current);
      expect(current).toEqual(4);
      expect(newTeams.at(current)?.name).toEqual("team 1");

      [newTeams, current] = snakeDraft(newTeams, current);
      expect(current).toEqual(0);
      expect(newTeams.at(current)?.name).toEqual("team 1");
    });
  });
});

describe("the reducer", () => {
  let initialState: TDraftState = {
    teams: [],
    currentTeam: null,
    selectedRikishi: null,
  };
  let result: TDraftState;
  const consoleErr = jest
      .spyOn(console, "error")
      .mockImplementation(jest.fn());
  describe("when initializing the state with new teams", () => {
    beforeEach(() => {
      result = reducer(initialState, {
        type: "INIT",
        payload: {
          teams: [
            { name: "team 1", rikishiTachi: [] },
            { name: "team 2", rikishiTachi: [] },
          ],
        },
      });
    });
    it("correctly initializes the teams", () => {
      expect(result.teams.map((team) => team.name).sort()).toEqual(
        ["team 2", "team 1"].sort()
      );
    });
    it("sets the current team", () => {
      expect(result.currentTeam?.name).toBe("team 1");
    });
  });

  describe("action SELECT_RIKISHI is applied", () => {
    beforeEach(() => {
      result = reducer(initialState, {
        type: "INIT",
        payload: {
          teams: [
            { name: "team 1", rikishiTachi: [] },
            { name: "team 2", rikishiTachi: [] },
          ],
        },
      });

      result = reducer(result, {
        type: "SELECT_RIKISHI",
        payload: "Hakuho",
      });
    });
    it("will select a new rikishi", () => {
      expect(result.selectedRikishi).toBe("Hakuho");
    });
  });

  describe("action DESELECT_RIKISHI is applied", () => {
    beforeEach(() => {
      result = reducer(initialState, {
        type: "INIT",
        payload: {
          teams: [
            { name: "team 1", rikishiTachi: [] },
            { name: "team 2", rikishiTachi: [] },
          ],
        },
      });

      result = reducer(result, {
        type: "SELECT_RIKISHI",
        payload: "Hakuho",
      });

      result = reducer(result, {
        type: "DESELECT_RIKISHI",
      });
    });
    it("will blank out the selectedRikishi", () => {
      expect(result.selectedRikishi).toBeNull();
    });
  });

  describe("drafting a rikishi to a team (`ADD_RIKISHI_TO_TEAM` action) but no currentTeam in the state", () => {
    const expctedErr = new Error("state lacks a current team");
    beforeEach(() => {
      result = reducer(initialState, {
        type: "ADD_RIKISHI_TO_TEAM",
        payload: {
          rikishi: {
            rikishi: "Hakuho",
            rank: "Yokozuna",
            side: "East",
            multiplier: 1,
            weight: 151,
            position: 1,
          },
        },
      });
    });
    it("will call console.error and return the original state", () => {
      expect(consoleErr).toHaveBeenCalledWith(expctedErr);
      expect(JSON.stringify(initialState)).toEqual(JSON.stringify(result));
    });
  });
  describe("drafting a rikishi to a team (`ADD_RIKISHI_TO_TEAM` action)", () => {
    beforeEach(() => {
      result = reducer(initialState, {
        type: "INIT",
        payload: {
          teams: [
            { name: "team 1", rikishiTachi: [] },
            { name: "team 2", rikishiTachi: [] },
          ],
        },
      });
    });

    it("will draft this rikishi and add it to team 1's team", () => {
      expect(result.currentTeam?.name).toBe("team 1");
      result = reducer(result, {
        type: "ADD_RIKISHI_TO_TEAM",
        payload: {
          rikishi: {
            rikishi: "Hakuho",
            rank: "Yokozuna",
            side: "East",
            multiplier: 1,
            weight: 151,
            position: 1,
          },
        },
      });

      let team1 = result.teams.find((team) => team.name === "team 1");
      expect(team1?.rikishiTachi.length).toBe(1);
      expect(team1?.rikishiTachi[0].rikishi).toBe("Hakuho");
      expect(result.currentTeam?.name).toBe("team 2");

      result = reducer(result, {
        type: "ADD_RIKISHI_TO_TEAM",
        payload: {
          rikishi: {
            rikishi: "Terunofuji",
            rank: "Yokozuna",
            side: "West",
            multiplier: 1.1,
            weight: 173,
            position: 1,
          },
        },
      });
      let team2 = result.teams.find((team) => team.name === "team 2");
      expect(team2?.rikishiTachi.length).toBe(1);
      expect(team2?.rikishiTachi[0].rikishi).toBe("Terunofuji");
      expect(result.currentTeam?.name).toBe("team 2");

      result = reducer(result, {
        type: "ADD_RIKISHI_TO_TEAM",
        payload: {
          rikishi: {
            rikishi: "Takakeisho",
            rank: "Ozeki",
            side: "East",
            multiplier: 1.2,
            weight: 197,
            position: 1,
          },
        },
      });
      team2 = result.teams.find((team) => team.name === "team 2");
      expect(team2?.rikishiTachi.length).toBe(2);
      expect(team2?.rikishiTachi[1].rikishi).toBe("Takakeisho");
      expect(result.currentTeam?.name).toBe("team 1");

      result = reducer(result, {
        type: "ADD_RIKISHI_TO_TEAM",
        payload: {
          rikishi: {
            rikishi: "Shodai",
            rank: "Sekiwake",
            side: "East",
            multiplier: 1.5,
            weight: 181,
            position: 1,
          },
        },
      });
      team1 = result.teams.find((team) => team.name === "team 1");
      expect(team1?.rikishiTachi.length).toBe(2);
      expect(team1?.rikishiTachi[1].rikishi).toBe("Shodai");
      expect(result.currentTeam?.name).toBe("team 1");

      result = reducer(result, {
        type: "ADD_RIKISHI_TO_TEAM",
        payload: {
          rikishi: {
            rikishi: "Tokushouryu",
            rank: "Maegashira",
            side: "East",
            multiplier: 5.1,
            weight: 181,
            position: 17,
          },
        },
      });
      team1 = result.teams.find((team) => team.name === "team 1");
      expect(team1?.rikishiTachi.length).toBe(3);
      expect(team1?.rikishiTachi[2].rikishi).toBe("Tokushouryu");
      expect(result.currentTeam?.name).toBe("team 2");
    });
  });
});
