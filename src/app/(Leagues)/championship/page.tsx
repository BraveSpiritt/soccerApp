import { filterLeague } from "@/api";
import LeagueTable from "@/app/components/LeagueTable";
import React from "react";

const Championship = async () => {
  const getChampionship = await filterLeague("Championship");
  return (
    <div className="w-[600px]">
    {getChampionship.length ? (
      getChampionship.map((data) => (
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

export default Championship;
