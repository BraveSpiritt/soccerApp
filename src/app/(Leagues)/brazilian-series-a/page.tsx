import { filterLeague } from "@/api";
import LeagueTable from "@/components/LeagueTable";

const Brasileiro = async () => {
  const getBrasileiro = await filterLeague("Campeonato Brasileiro Série A");
  return (
    <div className="w-[600px]">
      {getBrasileiro?.length ? (
        getBrasileiro.map((data) => (
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

export default Brasileiro;
