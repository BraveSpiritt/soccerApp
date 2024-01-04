import { filterLeague } from "@/api";
import LeagueTable from "@/app/components/LeagueTable";
import React from "react";

const SeriaA = async () => {
  const getSerieA = await filterLeague("Serie A");
  return (
    <div className="w-[600px]">
      {getSerieA && getSerieA.length > 0 ? (
        getSerieA.map((data: any) => (
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

export default SeriaA;
