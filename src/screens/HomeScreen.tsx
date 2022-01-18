import React, { useState } from "react";

import { StyleSheet, TouchableOpacity, View } from "react-native";

import { RouteParams } from "../navigation/RootNavigator";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import NewsList from "../components/newsList/NewsList";

const HomeScreen = () => {
    const [isLoading, setLoading] = useState(true);
    const [NewsDays, setNewsDays] = useState(0);

  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();
  const onProfilePress = () => {
    navigation.navigate("Article", { article: {} });
  };

  const data = [
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Igor Bonifacic",
      title:
        "The latest 'Belle' trailer introduces us to the film's dazzling technicolor virtual world",
      description:
        "With Mamoru Hosoda’s latest movie opening in US theaters this Friday, Studio Chizu and the film’s distributor have shared a new trailer for Belle\r\n. The more than three-minute-long clip shows the movie’s opening scene in its entirety, introducing us to U, Bel…",
      url: "https://www.engadget.com/belle-trailer-u-virtual-world-234024067.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-uploaded-images/2022-01/c8d44190-7334-11ec-bd7d-84d991cbfb48",
      publishedAt: "2022-01-11T23:40:24Z",
      content:
        "With Mamoru Hosodas latest movie opening in US theaters this Friday, Studio Chizu and the films distributor have shared a new trailer for Belle\r\n. The more than three-minute-long clip shows the movie… [+781 chars]",
    },
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Kris Holt",
      title: "Beats Fit Pro are coming to Canada, Europe and Japan this month",
      description:
        "A couple of months after they debuted in the US, Beats Fit Pro earbuds are on the way to Canada, Europe and Japan. Orders will open in Europe (£200/€230) and Canada ($250 CAD) on January 24th, and in Japan (24,800 yen) the following day. The earbuds will ship…",
      url: "https://www.engadget.com/beats-fit-pro-canada-europe-japan-release-date-161335850.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-uploaded-images/2021-11/1517ef30-3b08-11ec-bebd-a5bd5f0805b4",
      publishedAt: "2022-01-11T16:13:35Z",
      content:
        "A couple of months after they debuted in the US, Beats Fit Pro earbuds are on the way to Canada, Europe and Japan. Orders will open in Europe (£200/230) and Canada ($250 CAD) on January 24th, and in … [+878 chars]",
    },
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Kris Holt",
      title: "Roku offers easy access to live TV with a new hub",
      description:
        "Roku\r\n has added\r\n a new section that pulls together live TV programming from its own channel guide as well as third-party platforms. The Live TV Zone provides swift access to channels you recently watched as well as local and national news, sports, movies an…",
      url: "https://www.engadget.com/roku-live-tv-zone-youtube-tv-hulu-sling-174954064.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-uploaded-images/2022-01/737f5c40-7305-11ec-bbf9-fefe5e790bf7",
      publishedAt: "2022-01-11T17:49:54Z",
      content:
        "Roku\r\n has added\r\n a new section that pulls together live TV programming from its own channel guide as well as third-party platforms. The Live TV Zone provides swift access to channels you recently w… [+791 chars]",
    },
  ];

  return (
    <TouchableOpacity onPress={onProfilePress}>
      <View style={styles.container}>
        <NewsList data={data} setNewsDays={setNewsDays} isLoading={isLoading} />
      </View>
    </TouchableOpacity>
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

export default HomeScreen;
