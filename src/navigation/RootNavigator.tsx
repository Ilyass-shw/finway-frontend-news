import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import  {article} from '../helpers/getNews'
import  HomeScreen from "../screens/HomeScreen";
import ArticleScreen  from "../screens/ArticleScreen";

export type RouteParams = {
  "All News": undefined;
  Article: {
    article: article;
  };
};

const Stack = createNativeStackNavigator<RouteParams>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="All News" component={HomeScreen} />
        <Stack.Screen
          name="Article"
          component={ArticleScreen}
          options={{
            animation: "slide_from_right",
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
