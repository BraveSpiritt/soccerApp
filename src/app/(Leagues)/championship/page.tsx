import { filterLeague } from "@/api";
import LeagueTable from "@/components/LeagueTable";

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
        <div>No matches found</div>
      )}
    </div>
  );
};

export default Championship;
