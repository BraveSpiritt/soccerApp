import { filterLeague } from "@/api";
import LeagueTable from "@/app/components/LeagueTable";
import React from "react";

const LigueFrance = async () => {
  const getLigueFrance = await filterLeague("Ligue 1");
  return (
      <div className="w-[600px]">
      {getLigueFrance.length ? (
        getLigueFrance.map((data) => (
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

export default LigueFrance;