import { filterLeague } from "@/api";
import LeagueTable from "@/app/components/LeagueTable";
import React from "react";

const PremierLeague = async () => {
  const getEnglishLeague = await filterLeague("Premier League");
  return (
    <div className="w-[600px]">
      {getEnglishLeague && getEnglishLeague.length > 0 ? (
        getEnglishLeague.map((data: any) => (
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

export default PremierLeague;
