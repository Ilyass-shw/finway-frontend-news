import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";

import { StyleSheet, View } from "react-native";
import NewsList from "../components/newsList/NewsList";
import SearchBar from "../components/searchBar/SearchBar";
import { article, getNews } from "../helpers/getNews";

const Home: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [topic, setTopic] = useState("");
  const [data, setData] = useState<article[]>([]);
  const [NewsDays, setNewsDays] = useState(0);

  const updateTopic = (topic: string) => {
    setTopic(topic);
    setData([]);
  };
  useEffect(() => {
    (async () => {
      if (!topic) {
        setLoading(true);
        const GermanNews = await getNews(NewsDays);
        if (GermanNews.length > 0) {
          setData((prev) => [...prev, ...GermanNews]);
          setLoading(false);
        }
      } else {
        setLoading(true);
        const News = await getNews(NewsDays, topic);
        if (News.length > 0) {
          setData((prev) => [...prev, ...News]);
          setLoading(false);
        } else {
        }
      }
    })();
  }, [topic, NewsDays, setData, setLoading, getNews]);

  return (
    <>
      <SearchBar updateTopic={updateTopic} />
      <View style={styles.container}>
        <NewsList data={data} setNewsDays={setNewsDays} isLoading={isLoading} />
        <StatusBar style={"auto"} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6e6",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
