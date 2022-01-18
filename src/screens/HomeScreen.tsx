import React from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { RouteParams } from "../navigation/RootNavigator";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();
  const onProfilePress = () => {
    navigation.navigate("Article", { article: {} });
  };

  return (
    <TouchableOpacity onPress={onProfilePress}>
      <View style={styles.container}>
        <Text>home</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default HomeScreen;
