import moment from "moment";

type Source = {
  id: string;
  name: string;
};

export type article = {
  source: Source;
  author: any;
  title: string;
  description: string;
  content: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
};

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
      console.log(
        `https://finway-backend-news.herokuapp.com/api?q=us&from=${from}&to=${to}&sortBy=popularity`
      );
      const json = await response.json();
      console.log("response", json);
      return json.articles as Promise<article[]>;
    } else {
      console.log("calling");
console.log(
        "calling",
        `https://finway-backend-news.herokuapp.com/api?q=${topic}&from=${from}&to=${to}&sortBy=popularity`
      );
      const response = await fetch(
        `https://finway-backend-news.herokuapp.com/api?q=${topic}&from=${from}&to=${to}&sortBy=popularity`
      );
      
      const json = await response.json();
      console.log(json);
      return json.articles as Promise<article[]>;
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};
