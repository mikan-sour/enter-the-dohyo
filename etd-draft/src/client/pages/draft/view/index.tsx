import React, { useMemo } from "react";

import "../index.scss";
import { TBanzuke, TRikishi } from "../../../../shared/types";
import DraftboardRikishiProfile from "../../../components/molecules/draftboardRikishi";

function DraftViewDraftableRikishi({
  processedData,
}: {
  processedData: TRikishi[];
}) {
  return (
    <section className="draft-page-rikishi-select">
      {processedData.map((rikishi) => (
        <DraftboardRikishiProfile key={rikishi.multiplier} rikishi={rikishi} />
      ))}
    </section>
  );
}

export default function DraftView({ data }: { data: TBanzuke }) {
  const processedData: TRikishi[] = useMemo(() => {
    return [
      ...data.yokozuna,
      ...data.ozeki,
      ...data.sekiwake,
      ...data.komosubi,
      ...data.maegashira,
    ];
  }, [data]);
  return (
    <main className="draft-page">
      <article className="draft-page-wrapper">
        <DraftViewDraftableRikishi processedData={processedData} />
        <section></section>
      </article>
    </main>
  );
}
