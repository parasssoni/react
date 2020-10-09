import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import ListItem from "../../component/ListItem";
import Screen from "../../component/Screen";
import Icon from "../../component/Icon";
import ListItemSeprator from "../../component/ListItemSeprator";
import color from "../../config/color";

const menuItem = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundcolor: color.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundcolor: color.secondary,
    },
    targetScreen: "Messages",
  },
];

export default function AcountScreen({ navigation }) {
  return (
    <Screen style={styles.Screen}>
      <View style={styles.backgroundall}>
        <ListItem
          title="Developer Gang"
          subtitle="developergang5812@gmail.com"
          image={require("../devlope.png")}
        />
      </View>
      <View style={styles.backgroundall}>
        <FlatList
          data={menuItem}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeprator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundcolor={item.icon.backgroundcolor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <View style={styles.backgroundall}>
        <ListItem
          title="Logout"
          ImageComponent={<Icon name="logout" backgroundColor="#FF8040" />}
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  backgroundall: {
    marginVertical: 20,
    backgroundColor: color.white,
  },
  Screen: {
    backgroundColor: color.ligtgray,
  },
});
