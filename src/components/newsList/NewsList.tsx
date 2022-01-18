import React from "react";
import * as Random from "expo-random";
import { ActivityIndicator, FlatList, TouchableOpacity, View } from "react-native";
import { styles } from "./NewsListStyles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteParams } from "../../navigation/RootNavigator";
import ArticleItem from "../articleItem/ArticleItem";

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
interface NewsListProps {
  data: article[];
  setNewsDays: React.Dispatch<React.SetStateAction<number>>;
  isLoading: boolean;
}

const NewsList: React.FC<NewsListProps> = ({
  data,
  setNewsDays,
  isLoading,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  const loadMoreItem = () => {
    setNewsDays((prev) => prev + 1);
  };
  const renderLoader = () => {
    return isLoading ? (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };

  const renderListItem = ({ item }: { item: article }) => {
    const onProfilePress = () => {
      navigation.navigate("Article", { article: item });
    };
    return (
      <TouchableOpacity onPress={onProfilePress}>
        <ArticleItem article={item} />
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      style={styles.listStyle}
      data={data}
      keyExtractor={() => Random.getRandomBytes(5).toString()}
      renderItem={renderListItem}
      onEndReached={loadMoreItem}
      onEndReachedThreshold={0}
      ListFooterComponent={renderLoader}
    />
  );
};

export default NewsList;
