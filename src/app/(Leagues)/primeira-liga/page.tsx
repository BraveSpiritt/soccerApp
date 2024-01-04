import { filterLeague } from "@/api";
import LeagueTable from "@/app/components/LeagueTable";
import React from "react";

const PremiereLiga = async () => {
  const getPremiereLiga = await filterLeague("Primeira Liga");
  return (
    <div className="w-[600px]">
    {getPremiereLiga.length ? (
      getPremiereLiga.map((data) => (
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

export default PremiereLiga;
