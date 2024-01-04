import { filterLeague } from "@/api";
import LeagueTable from "@/app/components/LeagueTable";
import React from "react";

const LaLiga = async () => {
  const getLaLiga = await filterLeague("Primera Division");

  return (
    <div className="w-[600px]">
      {getLaLiga ? (
        getLaLiga &&
        getLaLiga.map((data: any) => (
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

export default LaLiga;
