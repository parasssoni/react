//card main List selcted an selected filed view is this
import React from "react";
import { View, StyleSheet, Image } from "react-native";
import color from "../../config/color";
import AppText from "../../component/AppText";
import ListItem from "../../component/ListItem";

export default function ListDetailScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../redjacket.jpg")} />
      <View>
        <AppText style={styles.titletext}>Red Jacket new collection</AppText>
        <AppText style={styles.price}>100$</AppText>
        <ListItem
          image={require("../devlope.png")}
          title="developer unknown"
          subtitle="5 Listing"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  titletext: {
    padding: 20,
    top: 20,
    color: color.black,
    fontSize: 20,
    lineHeight: 5,
    textTransform: "capitalize",
  },
  price: {
    padding: 20,
    fontSize: 20,
  },
});
