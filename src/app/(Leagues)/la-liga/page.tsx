import { filterLeague } from "@/api";
import LeagueTable from "@/components/LeagueTable";

const LaLiga = async () => {
  const getLaLiga = await filterLeague("Primera Division");

  return (
    <div className="w-[600px]">
      {getLaLiga?.length ? (
        getLaLiga.map((data) => (
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

export default LaLiga;
