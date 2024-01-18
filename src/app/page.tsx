import { getMatchesfootball, getMatchesfootballFinished } from "@/api";
import Status from "@/components/Status";
import { apiOptions } from "@/types";

export default async function Home() {
  const options: apiOptions = {
    next: { revalidate: 30 },
    headers: {
      "X-Auth-Token": '2d5ffdb62c8f459dacb199233105dfb5',
      "Content-Type": "application/json",
    },
  };
  const getDatas = await getMatchesfootball(options);
  const getDatasFinished = await getMatchesfootballFinished();

  const matchesDatas = getDatas?.matches;
  const matchesDatasFinished = getDatasFinished?.matches;

  const nd = new Date();
  const dateConvert = nd.toDateString();

  return (
    <section className="px-2 md:px-4 md:w-[600px]">
      <div className="flex justify-between items-center mb-4 md:mb-2">
        <h1 className="text-md md:text-xl font-bold">MATCHES</h1>
        <div className="px-4 py-0 md:py-1 bg-slate-600 rounded-md text-textPrimary text-sm">
          <p>{`${dateConvert}`}</p>
        </div>
      </div>
      <Status
        matchesList={matchesDatas}
        matchesListFinished={matchesDatasFinished}
      />
    </section>
  );
}
