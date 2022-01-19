import moment from "moment";
import { article } from "../types";

export const getNews = async (days: number, topic?: string) => {
  const from = moment().subtract(days, "day").format("YYYY-MM-DD");
  const to = moment()
    .subtract(days + 1, "day")
    .format("YYYY-MM-DD");

  try {
    if (!topic) {
      const response = await fetch(
        `https://finway-backend-news.herokuapp.com/api?q=us&from=${from}&to=${to}&sortBy=popularity`
      );
      const json = await response.json();
      return json.articles as Promise<article[]>;
    } else {
      const response = await fetch(
        `https://finway-backend-news.herokuapp.com/api?q=${topic}&from=${from}&to=${to}&sortBy=popularity`
      );

      const json = await response.json();
      return json.articles as Promise<article[]>;
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};
