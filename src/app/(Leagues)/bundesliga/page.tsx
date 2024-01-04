import { filterLeague } from "@/api";
import LeagueTable from "@/app/components/LeagueTable";
import React from "react";

const Bundesliga = async () => {
  const getBundesliga = await filterLeague("Bundesliga");
  return (
     <div className="w-[600px]">
      {getBundesliga.map((data: any) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      )) ?? (
        <p className="text-center mt-2 text-slate-400">No matches available</p>
      )}
    </div>
  );
};

export default Bundesliga;
