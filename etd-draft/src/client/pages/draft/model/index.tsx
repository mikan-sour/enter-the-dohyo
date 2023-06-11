import React, { useContext, useReducer } from "react";
import { TDraftAction, TDraftState, TETDTeam } from "../../../../shared/types";

export const swapOutTeam = (teams: TETDTeam[], targetTeam: TETDTeam) => {
  return teams.map((team) => {
    if (team.name === targetTeam.name) {
      return targetTeam;
    }
    return team;
  });
};

export const snakeDraft = (
  teams: TETDTeam[],
  current: number
): [TETDTeam[], number] => {
  if (current == teams.length - 1) {
    return [[...teams].reverse(), 0];
  }
  return [teams, current + 1];
};

const initialState: TDraftState = {
  teams: [],
  selectedRikishi: null,
  currentTeam: null,
  alreadyPicked:[]
};
export const reducer = (state: TDraftState, action: TDraftAction):TDraftState => {
  try {
    switch (action.type) {
      case "INIT":
        const { teams } = action.payload;
        return { ...state, teams, currentTeam: teams[0] };
      case "SELECT_RIKISHI":
        return { ...state, selectedRikishi: action.payload };

      case "DESELECT_RIKISHI":
        return { ...state, selectedRikishi: null };

      case "ADD_RIKISHI_TO_TEAM":
        if (!state.selectedRikishi) {
          throw new Error("state lacks a current team");
        }
        if (!state.currentTeam) {
          throw new Error("state lacks a current team");
        }

        const rikishiBeingDrafted = state.selectedRikishi
        const updatedCurrentTeamAfterDrafting:TETDTeam = {
          ...state.currentTeam,
          rikishiTachi: [...state.currentTeam.rikishiTachi, rikishiBeingDrafted],
        };

        const updatedTeamsAfterDraft = swapOutTeam(state.teams, updatedCurrentTeamAfterDrafting);

        const isDrafting = state.teams.indexOf(state.currentTeam);
        const [updatedTeams, current] = snakeDraft(
            updatedTeamsAfterDraft,
            isDrafting
          );
        return {
          ...state,
          teams: updatedTeams,
          currentTeam: updatedTeams[current],
          selectedRikishi: null,
          alreadyPicked: [...state.alreadyPicked, rikishiBeingDrafted.rikishi]
        };
    }
  } catch (error) {
    console.error(error);
    return state;
  }
};

export const DraftContext = React.createContext<{
  state: TDraftState;
  dispatch: React.Dispatch<TDraftAction>;
}>({
  state: initialState,
  dispatch: reducer as unknown as React.Dispatch<TDraftAction>,
});

export const DraftProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = React.useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <DraftContext.Provider value={contextValue}>
      {children}
    </DraftContext.Provider>
  );
};

export default function useDraftModel() {
  return useContext(DraftContext);
}
