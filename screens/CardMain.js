//in card main view list and particular one field selcted and open screen
//this screen name is ListDetailScreen you can go if you intreasted
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Card from "../../component/Card";
import color from "../../config/color";

export default function CardMain() {
  return (
    <View style={styles.backgrouncontainer}>
      <ScrollView>
        <Card
          title="Red jacket new collection"
          subtitle="100$"
          image={require("../../assets/redjacket.jpg")}
        />
        <Card
          title="Girls Beauty Reparing Shop"
          subtitle="50$"
          image={require("../../assets/beauty_pa.jpg")}
        />
        <Card
          title="Hair Cutting seminar"
          subtitle="50$"
          image={require("../../assets/barber_logo.png")}
        />
        <Card
          title="Hair Cutting logo"
          subtitle="50$"
          image={require("../../assets/barber_logo.png")}
        />
        <Card
          title="trial for men "
          subtitle="50$"
          image={require("../../assets/barber_logo.png")}
        />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  backgrouncontainer: {
    backgroundColor: color.silver,
    opacity: 5,
    flex: 1,
    padding: 20,
    paddingTop: 100,
  },
});
