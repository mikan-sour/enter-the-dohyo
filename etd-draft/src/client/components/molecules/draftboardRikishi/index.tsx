import React, { useEffect, useMemo } from "react";
import "./index.scss";
import { TRikishi } from "../../../../shared/types";
import useDraftModel from "../../../pages/draft/model";

export default function DraftboardRikishiProfile({
  rikishi,
}: {
  rikishi: TRikishi;
}) {
  const { state, dispatch } = useDraftModel();

  const handleSelect = () => {
    dispatch({ type: "SELECT_RIKISHI", payload: rikishi });
  };

  const handleDraft = () => {
    dispatch({ type: "ADD_RIKISHI_TO_TEAM", payload: { rikishi } });
  };

  const isDrafted = useMemo(() => {
    return state.alreadyPicked.indexOf(rikishi.rikishi) > -1;
  }, [state.alreadyPicked]);

  const appliedClasses = useMemo(() => {
    if (isDrafted) {
      return "already-picked";
    }
    if (state.selectedRikishi?.rikishi === rikishi.rikishi) {
      return "selected";
    }

    return "";
  }, [isDrafted, state.selectedRikishi]);

  return (
    <section
      onClick={handleSelect}
      className={`profile-wrapper ${appliedClasses}`}
    >
      <div className="profile-rikishi-details">
        <h3>{rikishi.rikishi}</h3>
        <div className="deets">
          <p>
            {rikishi.rank}{" "}
            <span className={rikishi.side.toLocaleLowerCase()}>
              {rikishi.side}
            </span>{" "}
            {rikishi.position}
          </p>
        </div>
      </div>
      <p>Multiplier: {rikishi.multiplier}</p>
      <button
        onClick={handleDraft}
        disabled={
          state.selectedRikishi?.rikishi !== rikishi.rikishi || isDrafted
        }
      >
        Draft
      </button>
    </section>
  );
}
