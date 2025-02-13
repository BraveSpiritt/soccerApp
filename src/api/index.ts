import { matchesType } from "@/types";

const todayDate = new Date();
const getDateMonth = new Date(todayDate.getTime());
getDateMonth.setDate(todayDate.getDate() - 1);
const year = getDateMonth.getFullYear();
const month = String(getDateMonth.getMonth() + 1).padStart(2, "0");
const day = String(getDateMonth.getDate()).padStart(2, "0");

const yesterday = [year, month, day].join("-");

export const getMatchesfootball = async (): Promise<any> => {
  const getData = await fetch("https://api.football-data.org/v4/matches", {
    method: "GET",
    cache: "no-store", 
    headers: {
      "X-Auth-Token": "2d5ffdb62c8f459dacb199233105dfb5",
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());

  return getData;
};

export const getMatchesfootballFinished = async () => {
  const matchData = await fetch(
    `https://api.football-data.org/v4/matches?date=${yesterday}`,
    {
      method: "GET",
      cache: "no-store", 
      headers: {
        "X-Auth-Token": "2d5ffdb62c8f459dacb199233105dfb5",
        "Content-Type": "application/json",
      },
    }
  );

  return matchData.json();
};

export const getNewsInfo = async () => {
  const newsData = await fetch(
    `https://newsapi.org/v2/everything?apiKey=${process.env.API_TOKEN_NEWS}&q=soccer&pageSize=5`,
    { next: { revalidate: 30 } }
  );
  return newsData.json();
};

export const filterLeague = async (filterData: string) => {
  const getEnglishLeague = await getMatchesfootball();
  const filterPremierLeague: matchesType[] = getEnglishLeague?.matches;
  const getData =
    filterPremierLeague &&
    filterPremierLeague.filter((item) => item.competition.name === filterData);
  return getData;
};
