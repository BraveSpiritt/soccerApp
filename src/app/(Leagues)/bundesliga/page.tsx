import { filterLeague } from "@/api";
import LeagueTable from "@/components/LeagueTable";

const Bundesliga = async () => {
  const getBundesliga = await filterLeague("Bundesliga");
  return (
    <div className="w-[600px]">
      {getBundesliga?.length ? (
        getBundesliga.map((data) => (
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

export default Bundesliga;
