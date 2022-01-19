import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { RouteParams } from "../navigation/RootNavigator";
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";

const ArticleScreen = () => {
  const route = useRoute<RouteProp<RouteParams>>();
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={{ uri: route.params?.article.urlToImage }}
            resizeMode={"cover"}
            style={{
              height: 300,
              backgroundColor: "black",
            }}
          />
        </View>
        <View style={styles.txtContainer}>
          <View>
            <Text style={styles.title}>{route.params?.article.title}</Text>
          </View>
          <Text style={styles.text}>{route.params?.article.description}</Text>
          <Text style={styles.text}>
            {route.params?.article.content.split("[")[0]}
          </Text>
          <Text style={styles.source}>
            Short by {route.params?.article.source.name}
          </Text>
        </View>
        <ImageBackground
          blurRadius={90}
          style={styles.footer}
          source={{ uri: route.params?.article.urlToImage }}
        >
          <Text
            lineBreakMode="clip"
            numberOfLines={1}
            style={{
              paddingHorizontal: 5,
              fontSize: 15,
              color: "white",
              textAlign: "center",
            }}
          >
            '{route.params?.article.content}
          </Text>
          <Text
            onPress={() => Linking.openURL(`${route.params?.article.url}`)}
            style={{
              fontSize: 17,
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
            }}
          >
            read more
          </Text>
        </ImageBackground>

        <StatusBar style={"auto"} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  txtContainer: {
    justifyContent: "center",
    alignSelf: "center",
    width: "90%",
  },
  title: {
    paddingVertical: 25,
    fontWeight: "700",
    fontSize: 20,
  },
  text: {
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 28,
  },
  source: {
    paddingVertical: 30,
  },
  footer: {
    height: 80,
    width: "100%",
    bottom: 0,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default ArticleScreen;
