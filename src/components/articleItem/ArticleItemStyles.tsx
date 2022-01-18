import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemWrapperStyle: {
    flexDirection: "row",
    backgroundColor: "white",
    alignSelf: "center",
    width: "90%",
    height: 160,
    marginVertical: 4,
  },
  itemImageStyle: {
    width: "50%",
    marginVertical: 12,
    marginHorizontal: 9,
  },
  contentWrapperStyle: {
    width: "80%",
  },

  txtTitleStyle: {
    fontWeight: "700",
    fontSize: 17,
  },
  TitleContainer: {
    marginTop: 14,
    height: "60%",
    width: "53%",
  },
  sourceName: {
    fontSize: 14,
    marginTop: 8,
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: "center",
  },
});
