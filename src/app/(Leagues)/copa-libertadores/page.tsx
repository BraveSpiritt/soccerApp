import { filterLeague } from "@/api";
import LeagueTable from "@/app/components/LeagueTable";
import React from "react";

const CopaLibertadores = async () => {
  const getCopaLibertadores = await filterLeague("Copa Libertadores");
  return (
    <div className="w-[600px]">
      {getCopaLibertadores && getCopaLibertadores.length > 0 ? (
        getCopaLibertadores.map((data: any) => (
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

export default CopaLibertadores;
