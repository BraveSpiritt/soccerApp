import { filterLeague } from "@/api";
import LeagueTable from "@/components/LeagueTable";

const CopaLibertadores = async () => {
  const getCopaLibertadores = await filterLeague("Copa Libertadores");
  return (
    <div className="w-[600px]">
      {getCopaLibertadores?.length ? (
        getCopaLibertadores.map((data) => (
          <div key={data.id}>
            <LeagueTable data={data} />
          </div>
        ))
      ) : (
        <div>No matches found</div>
      )}
    </div>
  );
};

export default CopaLibertadores;
