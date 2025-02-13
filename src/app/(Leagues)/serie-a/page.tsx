import { filterLeague } from "@/api";
import LeagueTable from "@/components/LeagueTable";

const SerieA = async () => {
  const getSerieA = await filterLeague("Serie A");
  return (
    <div className="w-[600px]">
      {getSerieA?.length ? (
        getSerieA.map((data) => (
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

export default SerieA;
