import React from "react";
import { StyleSheet, FlatList } from "react-native";
import Screen from "../../component/Screen";
import Card from "../../component/Card";
import color from "../../config/color";

const listings = [
  {
    id: 1,
    title: "Red Jacket New Collection",
    price: 100,
    image: require("../redjacket.jpg"),
  },
  {
    id: 2,
    title: "Beauty New Collection",
    price: 300,
    image: require("../beauty_pa.jpg"),
  },
  {
    id: 2,
    title: "Beauty New Collection",
    price: 300,
    image: require("../beauty_pa.jpg"),
  },
];

export default function ListingsScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card title={item.title} subtitle={item.price} image={item.image} />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: color.lightgray,
  },
});
