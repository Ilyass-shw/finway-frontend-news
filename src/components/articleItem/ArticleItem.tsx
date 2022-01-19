import React from "react";
import { Image, Text, View } from "react-native";
import { article } from "../../types";
import { styles } from "./ArticleItemStyles";

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
