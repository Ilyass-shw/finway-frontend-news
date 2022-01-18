import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./ArticleItemStyles";

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
interface ArticleItemProps {
  article: article;
}
const ArticleItem: React.FC<ArticleItemProps> = ({ article }) => {
  return (
    <View style={styles.itemWrapperStyle}>
      <Image
        style={styles.itemImageStyle}
        source={{ uri: article.urlToImage }}
      />
      <View style={styles.contentWrapperStyle}>
        <View style={styles.TitleContainer}>
          <Text
            numberOfLines={3}
            ellipsizeMode="tail"
            style={styles.txtTitleStyle}
          >
            {article.title}
          </Text>
        </View>
        <View>
          <Text style={styles.sourceName}>{article.source.name}</Text>
        </View>
      </View>
    </View>
  );
};

export default ArticleItem;
