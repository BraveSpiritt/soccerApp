import { filterLeague } from "@/api";
import LeagueTable from "@/app/components/LeagueTable";
import React from "react";

const BrasileroSerieA = async () => {
  const getBrasileroSerieA = await filterLeague(
    "Campeonato Brasileiro Série A"
  );
  return (
    <div className="w-[600px]">
      {getBrasileroSerieA && getBrasileroSerieA.length > 0 ? (
        getBrasileroSerieA.map((data: any) => (
          <div key={data.id}>
            <LeagueTable data={data} />
          </div>
        ))
      ) : (
        <p className="text-center mt-2 text-slate-400">No matches available</p>
      )}
    </div>
  );
};

export default BrasileroSerieA;
